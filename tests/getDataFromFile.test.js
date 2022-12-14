const fs = require('fs');
const { getDataFromFile } = require('../scripts/getDataFromFile.js');

describe('tests on getDataFromFile.js', () => { 
    test('getDataFromFile returns correct data when file exists and contains expected data', () => {
        fs.writeFileSync('./dataset/data.txt', `ALEX=MO11:00-13:00,TU08:15-10:00,WE08:15-10:15,TH10:00-13:00,SU20:00-21:00
        ANDRES=TU08:00-10:00,WE09:00-12:00,TH12:00-13:15,SU14:00-16:15
        DANIELA=MO11:00-13:00,TU08:00-10:00,SU14:00-16:15
        ESTEBAN=WE02:00-04:00,TH12:00-13:15,FR10:00-12:15,SU14:00-16:15
        MATEO=MO12:00-13:00
        TATIANA=TU08:00-10:00,WE09:00-12:00,TH12:00-13:15,SU20:00-21:00
        ALBA=MO07:00-09:00,WE09:00-12:00,TH12:00-13:15,FR10:00-12:15,SU14:00-16:15`, 'utf-8');

        expect(getDataFromFile()).toBe(`ALEX=MO11:00-13:00,TU08:15-10:00,WE08:15-10:15,TH10:00-13:00,SU20:00-21:00
        ANDRES=TU08:00-10:00,WE09:00-12:00,TH12:00-13:15,SU14:00-16:15
        DANIELA=MO11:00-13:00,TU08:00-10:00,SU14:00-16:15
        ESTEBAN=WE02:00-04:00,TH12:00-13:15,FR10:00-12:15,SU14:00-16:15
        MATEO=MO12:00-13:00
        TATIANA=TU08:00-10:00,WE09:00-12:00,TH12:00-13:15,SU20:00-21:00
        ALBA=MO07:00-09:00,WE09:00-12:00,TH12:00-13:15,FR10:00-12:15,SU14:00-16:15`);
      });  

      test('getDataFromFile throws error when file does not exist', () => {
        if (fs.existsSync('./dataset/data.txt')) {
          fs.unlinkSync('./dataset/data.txt');
        }
        expect(() => getDataFromFile()).toThrow(/ENOENT: no such file or directory/);
      });

      test('getDataFromFile throws error when file is empty', () => {
        fs.writeFileSync('./dataset/data.txt', '', 'utf-8');
        expect(getDataFromFile()).toBe('Error: File data is empty!');
      });
 });