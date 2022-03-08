import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const mySeq = Seq(obj);
  const myStuPassing = mySeq.filter((value) => value.score > 70);
  const myStu = myStuPassing.toJS();
  const toUpper = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(myStu).map((key) => {
    myStu[key].firstName = toUpper(myStu[key].firstName);
    myStu[key].lastName = toUpper(myStu[key].lastName);
    return myStu[key];
  });
  console.log(myStu);
}
