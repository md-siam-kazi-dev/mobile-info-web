
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { brands } from "../utils/brandlist";
import { useState } from "react";

const FilterSectionHP = () => {
    const [selectedBrand,setSelectedBrand] = useState('Oppo');
  return (
    <div className="max-w-[1440px] w-11/12 mx-auto">
      <h1 className="font-bold mt-6 sm:mt-10 text-4xl text-center">
        Let's Find A Mobile
      </h1>

      <h1 className="font-semibold mt-6 sm:mt-10 text-2xl text-center">Choose Price Range</h1>

      <div className="mt-6 text-center">
        <FieldGroup className="grid max-w-sm mx-auto grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="min-price">Minimum Price</FieldLabel>
            <Input id="min-price" placeholder="Min Price" defaultValue="5000" />
          </Field>
          <Field>
            <FieldLabel htmlFor="max-price">Maximum Price</FieldLabel>
            <Input
              id="max-price"
              placeholder="Max Price"
              defaultValue="200000"
            />
          </Field>
        </FieldGroup>

        <h1 className="font-semibold mt-6 sm:mt-10 text-2xl text-center">Select A Brand</h1>

        <RadioGroup
         
          value= {selectedBrand}
          className="mt-6 flex flex-row flex-wrap items-start justify-center gap-2 w-fit mx-auto"
        >
          {brands.map((brand) => {
            return (
              <div key={brand.id} onClick={() => {setSelectedBrand(brand.value)}} className="flex items-center btn btn-neutral btn-outline border-1 gap-3">
                <RadioGroupItem value={brand.value}  id={brand.id} />
                <Label htmlFor={brand.id}>{brand.label}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterSectionHP;
