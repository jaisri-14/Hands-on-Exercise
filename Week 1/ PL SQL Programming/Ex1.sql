SET SERVEROUTPUT ON;

-- Scenario 1: Apply 1% discount to loan interest rates
DECLARE
    v_age NUMBER;
BEGIN
    FOR c IN (SELECT CustomerID, DOB FROM Customers)
    LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied for Customer ID: ' || c.CustomerID
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 2: Display customers eligible for VIP status
BEGIN
    FOR c IN (SELECT CustomerID, Name, Balance FROM Customers)
    LOOP
        IF c.Balance > 10000 THEN
            DBMS_OUTPUT.PUT_LINE(
                'Customer ' || c.Name ||
                ' (ID: ' || c.CustomerID ||
                ') is eligible for VIP status.'
            );
        END IF;
    END LOOP;
END;
/

-- Scenario 3: Print reminders for loans due within the next 30 days
BEGIN
    FOR l IN (
        SELECT c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || l.LoanID ||
            ' for ' || l.Name ||
            ' is due on ' ||
            TO_CHAR(l.EndDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/