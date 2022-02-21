import React, { useState } from "react";

import FormContainer from "../components/Form/FormContainer";
import FamilyMembers from "../components/Form/FamilyMembers";

const CreateProfile = () => {
  const [form, setForm] = useState({
    step: 1,
    name: "",
    gender: "",
    inCanada: false,
    job: "",
    language: "",
    englishProficiency: "",
    currentCity: "",
    numberOfPeople: 0,
    family: [],
  });

  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };

  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };

  const handleChange = (input, e) => {
    setForm({ ...form, [input]: e.target.value });
  };

  const handleFamilyMemberChange = (input, e, i) => {
    const { family } = form;
    const newFamily = [...family];
    newFamily[i] = { ...newFamily[i], [input]: e.target.value };
    setForm({ ...form, newFamily });
  };

  const addFamilyMembers = (n) => {
    const obj = {
      id: "",
      age: "",
      gender: "",
    };

    let index = 0;

    let family = Array.from({ length: n }, () => ({ ...obj, id: index++ }));

    setForm({ ...form, family: family });
  };

  console.log(form);

  const displaySection = (step) => {
    switch (step) {
      case 1:
        return (
          <FamilyMembers
            addFamilyMembers={addFamilyMembers}
            handleFamilyMemberChange={handleFamilyMemberChange}
            form={form}
            setForm={setForm}
          />
        );
      default:
        return <h1>Loading...</h1>;
    }
  };

  return (
    <>
      <FormContainer prevStep={prevStep} nextStep={nextStep} width="sm">
        {displaySection(form.step)}
      </FormContainer>
    </>
  );
};

export default CreateProfile;
