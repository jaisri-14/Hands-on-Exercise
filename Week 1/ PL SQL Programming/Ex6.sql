-- Scenario 1: Generate Monthly Statements

DECLARE
    CURSOR c_stmt IS
        SELECT customer_id, transaction_id, amount, transaction_date
        FROM transactions
        WHERE transaction_date >= TRUNC(SYSDATE, 'MM');

BEGIN
    FOR rec IN c_stmt LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Customer ID: ' || rec.customer_id ||
            ' | Transaction ID: ' || rec.transaction_id ||
            ' | Amount: ' || rec.amount ||
            ' | Date: ' || rec.transaction_date
        );
    END LOOP;
END;
/

-- Scenario 2: Apply Annual Fee

DECLARE
    CURSOR c_fee IS
        SELECT account_id, balance
        FROM accounts;

    v_fee NUMBER := 500;
BEGIN
    FOR rec IN c_fee LOOP
        UPDATE accounts
        SET balance = balance - v_fee
        WHERE account_id = rec.account_id;

        DBMS_OUTPUT.PUT_LINE('Annual fee applied to Account ID: ' || rec.account_id);
    END LOOP;

    COMMIT;
END;
/

-- Scenario 3: Update Loan Interest Rates

DECLARE
    CURSOR c_loan IS
        SELECT loan_id, interest_rate
        FROM loans;

    v_new_rate NUMBER := 8;
BEGIN
    FOR rec IN c_loan LOOP
        UPDATE loans
        SET interest_rate = v_new_rate
        WHERE loan_id = rec.loan_id;

        DBMS_OUTPUT.PUT_LINE('Updated Loan ID: ' || rec.loan_id);
    END LOOP;

    COMMIT;
END;
/