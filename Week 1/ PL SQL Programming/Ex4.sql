-- Scenario 1: Calculate Age from Date of Birth

CREATE OR REPLACE FUNCTION CalculateAge (
    p_dob DATE
) RETURN NUMBER AS
    v_age NUMBER;
BEGIN
    -- Calculate age using months difference
    v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, p_dob) / 12);
    RETURN v_age;
END;
/

-- Scenario 2: Calculate Monthly Installment for Loan

CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
    p_loan_amount NUMBER,
    p_interest_rate NUMBER,
    p_years NUMBER
) RETURN NUMBER AS
    v_monthly_rate NUMBER;
    v_months NUMBER;
    v_installment NUMBER;
BEGIN
    -- Add interest to loan amount
    v_monthly_rate := (p_loan_amount + (p_loan_amount * p_interest_rate / 100));

    -- Convert years into months
    v_months := p_years * 12;

    -- Calculate monthly installment
    v_installment := v_monthly_rate / v_months;

    RETURN v_installment;
END;
/

-- Scenario 3: Check Sufficient Balance

CREATE OR REPLACE FUNCTION HasSufficientBalance (
    p_account_id NUMBER,
    p_amount NUMBER
) RETURN BOOLEAN AS
    v_balance NUMBER;
BEGIN
    -- Get account balance
    SELECT balance
    INTO v_balance
    FROM accounts
    WHERE account_id = p_account_id;

    -- Check if balance is enough
    IF v_balance >= p_amount THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;

EXCEPTION
    -- If any error occurs, return FALSE
    WHEN OTHERS THEN
        RETURN FALSE;
END;
/