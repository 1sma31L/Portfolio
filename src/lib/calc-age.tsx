'use client';

import { useEffect, useState } from 'react';

const CalculateAge = ({ birthDate }: { birthDate: string }) => {
  const [age, setAge] = useState<number>(0);
  useEffect(() => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    setAge(age);
  }, [birthDate]);
  return <span>{age}</span>;
};
export default CalculateAge;
