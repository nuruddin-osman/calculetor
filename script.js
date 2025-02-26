function insertNumber(number) {
  let prevVal = $("#result").val();
  $("#result").val(prevVal + number);
}

function clearField() {
  $("#result").val("");
}

function results() {
  let result = eval($("#result").val());
  $("#result").val(result);
}

function deletes() {
  let del = $("#result").val().slice(0, -1);
  $("#result").val(del);
}
