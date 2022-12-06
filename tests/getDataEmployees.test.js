describe('tests on getDataEmployees', () => { 
    test('data from file returns data by line', () => {
        const expectedResult = ['ALEX=MO09:00-17:00','ANDRES=TU09:00-17:00'];
        const getDataFromFile = jest.fn(() => `ALEX=MO09:00-17:00\nANDRES=TU09:00-17:00`);
        const dataEmployees = getDataFromFile().split(`\n`);
        
        expect(getDataFromFile).toHaveBeenCalledTimes(1);
        expect(dataEmployees).toEqual(expectedResult);
    });

    test('the pair employee schedule is properly filled', () => {
        const expectedEmployee = [{ employeeName: 'ALEX', employeeSchedule: 'MO09:00-17:00' }, { employeeName: 'ANDRES', employeeSchedule: 'TU09:00-17:00' }];
        const dataEmployees = ['ALEX=MO09:00-17:00', 'ANDRES=TU09:00-17:00'];
        const employeeSchedule = dataEmployees.map((dataEmployee) => {
          const [employeeName, employeeSchedule] = dataEmployee.split('=');
          return { employeeName, employeeSchedule };
        });
      
        expect(employeeSchedule).toEqual(expectedEmployee);
      });

      test('the object employee is properly structured', () => {
        const expectedEmployee = [{
          employeeName: 'ALEX',
          scheduleDays: ['MO'],
          entryHours: ['09:00'],
          exitHours: ['17:00']
        },
        {
          employeeName: 'ANDRES',
          scheduleDays: ['TU'],
          entryHours: ['09:00'],
          exitHours: ['17:00']
        }];
        const employeeSchedule = [{ employeeName: 'ALEX', employeeSchedule: 'MO09:00-17:00' }, { employeeName: 'ANDRES', employeeSchedule: 'TU09:00-17:00' }];
        const employeesData = employeeSchedule.map((dataEmployee) => {
          const { employeeName, employeeSchedule } = dataEmployee;
          const scheduleDays = employeeSchedule.split(',').map((day) => day.substring(0, 2));
          const entryHours = employeeSchedule.split(',').map((hour) => hour.substring(2, 7));
          const exitHours = employeeSchedule.split(',').map((hour) => hour.substring(8, 14));
          return { employeeName, scheduleDays, entryHours, exitHours };
        });
      
        expect(employeesData).toEqual(expectedEmployee);
      });
 })