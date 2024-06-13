const detailvalue = document.getElementById("detail_value_id");
const detail_shadow_id = document.getElementById("detail_shadow_id");
const detail_seemore_btn_id = document.getElementById("detail_seemore_btn_id");
const detailSpan = document.querySelectorAll("#detail_value_span");
let active = true;
function SeeMore() {
  if (active) {
    detailvalue.style.height = `${detailSpan[0].offsetHeight}px`;
    detailvalue.style.margin = `0 0 2rem 0`;
    detailvalue.style.overflow = `unset`;
    detail_seemore_btn_id.style.bottom = `-2rem`;
    detail_shadow_id.style.display = "none";
    active = false;
  } else {
    detailvalue.style.height = `10.5rem`;
    detailvalue.style.margin = `0rem`;
    detailvalue.style.overflow = `hidden`;
    detail_shadow_id.style.display = "block";
    detail_seemore_btn_id.style.bottom = `0`;
    active = true;
  }
}
