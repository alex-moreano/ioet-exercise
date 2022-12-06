describe('tests on outputEmployee.js', () => { 
    const checkInRange = (start, end, hourToCheck)=>{
        return hourToCheck >= start && hourToCheck <= end;
    };

    test("checkInRange returns true if hourToCheck is in range of start and end hours", () => {
        expect(checkInRange('08:00', '18:00', '12:00')).toBe(true);
    });

    test("checkInRange returns false if hourToCheck is not in range of start and end hours", () => {
        expect(checkInRange('08:00', '18:00', '22:00')).toBe(false);
    });   

 })