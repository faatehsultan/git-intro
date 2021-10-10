$(document).ready(function () {
  const STEP_COUNT = 18;
  let currentStep = 1;

  const updateBtnStates = () => {
    if (currentStep == 1) {
      $("#previousBtn").prop("disabled", true);
    } else {
      $("#previousBtn").attr("disabled", false);
    }

    if (currentStep == STEP_COUNT) {
      $("#nextBtn").prop("disabled", true);
    } else {
      $("#nextBtn").attr("disabled", false);
    }
  };

  // disable all steps except first on page load
  $(".step").hide();
  $("#step1").show();
  updateBtnStates();

  $("#nextBtn").on("click", () => {
    if (currentStep < STEP_COUNT) {
      $(`#step${currentStep}`).hide();
      currentStep++;
      $(`#step${currentStep}`).show();
    }
    updateBtnStates();
  });

  $("#previousBtn").on("click", () => {
    if (currentStep > 1) {
      $(`#step${currentStep}`).hide();
      currentStep--;
      $(`#step${currentStep}`).show();
    }
    updateBtnStates();
  });
});
