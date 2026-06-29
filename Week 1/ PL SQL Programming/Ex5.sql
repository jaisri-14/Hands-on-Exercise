-- Scenario 1: Update last modified date when customer record is updated

CREATE OR REPLACE TRIGGER UpdateCustomerLastModified
BEFORE UPDATE ON Customers
FOR EACH ROW
BEGIN
    -- Set last modified date to current system date
    :NEW.LastModified := SYSDATE;
END;
/

-- Scenario Insert audit log for every transaction

CREATE OR REPLACE TRIGGER LogTransaction
AFTER INSERT ON Transactions
FOR EACH ROW
BEGIN
    -- Store transaction details in audit table
    INSERT INTO AuditLog (transaction_id, account_id, amount, action_date)
    VALUES (:NEW.transaction_id, :NEW.account_id, :NEW.amount, SYSDATE);
END;
/

-- Scenario Validate deposits and withdrawals before inserting transaction

CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
    v_balance NUMBER;
BEGIN
    -- Get current balance
    SELECT balance INTO v_balance
    FROM accounts
    WHERE account_id = :NEW.account_id;

    -- Rule 1: Deposit must be positive
    IF :NEW.transaction_type = 'DEPOSIT' AND :NEW.amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Deposit must be greater than 0');
    END IF;

    -- Rule 2: Withdrawal should not exceed balance
    IF :NEW.transaction_type = 'WITHDRAW' AND :NEW.amount > v_balance THEN
        RAISE_APPLICATION_ERROR(-20002, 'Insufficient balance for withdrawal');
    END IF;
END;
/