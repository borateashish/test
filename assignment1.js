// Import stylesheets
import './assignment1.css';

// Write Javascript code!
function StudMarksheet() {
  var nm = document.StudInfo.Studnm.value;
  var fnm = document.StudInfo.Studfnm.value;
  var insnm = document.StudInfo.Studinst.value;
  var batch = document.StudInfo.Studbatch.value;
  var oam = document.StudInfo.OAMarks.value;
  var wdm = document.StudInfo.WDMarks.value;
  var itm = document.StudInfo.ITMarks.value;
  var cpm = document.StudInfo.CPMarks.value;
  var TotalMarks = eval(
    parseFloat(oam) + parseFloat(wdm) + parseFloat(itm) + parseFloat(cpm)
  );
  var TotalPer = eval(parseFloat(TotalMarks * 100) / 400);

  if (nm != NaN || fnm != NaN || instnm != NaN) {
    alert(
      'Please Enter Only Characters in Name, Father Name And Institute Name..!!'
    );
  } else if (oam == '' || cpm == '' || itm == '' || wdm == '') {
    alert('Please Enter all Subject Marks!!');
  } else if (isNaN(oam) || isNaN(cpm) || isNaN(itm) || isNaN(wdm)) {
    alert('Subject Marks Should be numbers only..!!');
    document.getElementById('Studname').innerHTML = '';
    document.getElementById('Studfname').innerHTML = '';
    document.getElementById('Studins').innerHTML = '';
    document.getElementById('Studbatch').innerHTML = '';
    document.getElementById('Studoffice').innerHTML = '';
    document.getElementById('Studweb').innerHTML = '';
    document.getElementById('Studit').innerHTML = '';
    document.getElementById('Studc').innerHTML = '';
    document.getElementById('Studtotal').innerHTML = '';
    document.getElementById('Studper').innerHTML = '';
  } else if (oam > 100 || wdm > 100 || itm > 100 || cpm > 100) {
    alert('Marks should not be greater than 100.');
  } else {
    document.getElementById('Studname').innerHTML = nm;
    document.getElementById('Studfname').innerHTML = fnm;
    document.getElementById('Studins').innerHTML = insnm;
    document.getElementById('Studbatch').innerHTML = batch;
    document.getElementById('Studoffice').innerHTML = oam;
    document.getElementById('Studweb').innerHTML = wdm;
    document.getElementById('Studit').innerHTML = itm;
    document.getElementById('Studc').innerHTML = cpm;
    document.getElementById('Studper').innerHTML = TotalPer.toFixed(2) + '%';
    document.getElementById('Studtotal').innerHTML = TotalMarks;

    if (TotalPer >= 80) document.getElementById('Studgrade').innerHTML = 'O';
    else if (TotalPer >= 70)
      document.getElementById('Studgrade').innerHTML = 'A';
    else if (TotalPer >= 60)
      document.getElementById('Studgrade').innerHTML = 'B';
    else if (TotalPer >= 50)
      document.getElementById('Studgrade').innerHTML = 'C';
    else if (TotalPer >= 40)
      document.getElementById('Studgrade').innerHTML = 'D';
    else if (TotalPer < 40)
      document.getElementById('Studgrade').innerHTML = 'Fail';
  }
}
function clrmarksheet() {
  document.StudInfo.Studnm.value = '';
  document.StudInfo.Studfnm.value = '';
  document.StudInfo.Studinst.value = '';
  document.StudInfo.Studbatch.value = '';
  document.StudInfo.OAMarks.value = '';
  document.StudInfo.WDMarks.value = '';
  document.StudInfo.ITMarks.value = '';
  document.StudInfo.CPMarks.value = '';
  document.getElementById('Studname').innerHTML = '';
  document.getElementById('Studfname').innerHTML = '';
  document.getElementById('Studins').innerHTML = '';
  document.getElementById('Studbatch').innerHTML = '';
  document.getElementById('Studoffice').innerHTML = '';
  document.getElementById('Studweb').innerHTML = '';
  document.getElementById('Studit').innerHTML = '';
  document.getElementById('Studc').innerHTML = '';
  document.getElementById('Studtotal').innerHTML = '';
  document.getElementById('Studper').innerHTML = '';
  document.getElementById('Studgrade').innerHTML = '';
}
