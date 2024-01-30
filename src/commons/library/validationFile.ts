// 파일은 File이라는 타입이 있음.
export const checkValidationFile = (file?: File): boolean => {
  // 만약  파일이 없을경우
  if (typeof file === "undefined") {
    alert("파일이 없습니다.");
    return false;
  }
  // 만약 파일의 크기가 너무 클 경우(5MB일 경우)
  if (file.size > 5 * 1024 * 1024) {
    alert("파일의 용량이 너무 큽니다. 제한(5메가)");
    return false;
  }

  // 파일의 형식을 지정해주고 싶을 경우
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("이미지파일의 형식이 아닙니다.");
    return false;
  }

  //   모두가 성공했을 때
  return true;
};
