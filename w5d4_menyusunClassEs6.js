class Student {
  constructor(name, age, bday, gender, id, hobbies) {
    this.name = name;
    this.age = age;
    this.bday = bday;
    this.gender = gender;
    this.id = id;
    this.hobbies = hobbies;
  }

  setName(newName){
    this.name = newName;
  }

  setAge(newAge){
    this.age = newAge;
  }

  setDateOfBirth(newBday){
    this.bday = newBday;
  }

  setGender(newGender){
    this.gender = newGender;

    if(this.gender !== 'Male' || this.gender !== 'Male'){
      this.gender = 'Error !!! Gender Tidak Jelas, Silahkan Ulangi'
    }
  }

  addHobby(newHobby){
    this.hobbies.push(newHobby);
  }

  removeHobby(remHobby){
    var index = this.hobbies.indexOf(remHobby);
    if(index > -1){
      this.hobbies.splice(index, 1)
    }
  }

  getData(){
    console.log('Student ID : '+this.id);
    console.log('Name : '+this.name);
    console.log('Age : '+this.age);
    console.log('Date Of Birth : '+this.bday);
    console.log('Gender : '+this.gender);
    console.log('Hobby : '+this.hobbies);
  }


}
let data = new Student('', '', '', '','AB01701', []);

data.setName('riski');
data.setAge(24);
data.setDateOfBirth('06-11-93');
data.setGender('Male');
data.addHobby('traveling');
data.addHobby('Ngoding');
data.addHobby('Gaming');
data.removeHobby('Ngoding');
data.getData();
