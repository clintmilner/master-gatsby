import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

const createPatchFromValue = (value) =>
  PatchEvent.from(value === "" ? unset() : set(value));

const formatMoney = Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
}).format;

const PriceInput = ({ value, type, onChange, inputComponent }) => {
  console.info(value);
  return (
    <div>
      <strong>
        {type?.title} - {value && formatMoney(value / 100)}
      </strong>
      <p>{type?.description}</p>
      <input
        type={type?.name}
        value={value}
        onChange={(e) => onChange(createPatchFromValue(Number(e.target.value)))}
        ref={inputComponent}
      />
    </div>
  );
};

export default PriceInput;
