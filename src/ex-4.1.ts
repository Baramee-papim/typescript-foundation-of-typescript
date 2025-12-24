type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John"});
console.log(result); // ควรได้ false

// Error ที่เจอคือ ตอน excecute function isAdult เนื่องจากไม่มี argument ของ user.ageส่งมาจึงได้ output เป็น undefined เมื่อ return ออกมาจึงทำให้ผิด logic (undefined >= 18)
//ดังนั้นจึงแก้ไขด้วยการกำหนด Nullish Coalescing Operator ให้กับ user.age เป็น syntax (user.age ?? 0) ความหมายคือ ถ้า user.age เป็น null หรือ undefined ให้ใช้ค่า 0 แทน
