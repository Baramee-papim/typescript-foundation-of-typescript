type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  let result: boolean;
  if (typeof user.age === "number" && user.age >= 18) result = true;
  else result = false;
  return result;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// type ที่กำหนดให้ใน  Object กำหนดให้ age เป็น Optional เมื่อเป็น Optional ถ้าไม่ได้ assign ค่าเเล้วจะทำให้เกิด error
