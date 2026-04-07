import { Suspense } from "react";
import FilterSectionHP from "./FilterSectionHP";
import PhoneContainer from "./phoneContainer";
import { api } from "../utils/api";
import { SpinnerCustom } from "../common/spinner";

const HomePage = () => {
  const fetchUrl = fetch(api + "/api/phones").then((res) => res.json());
  console.log(fetchUrl);
  return (
    <>
      <FilterSectionHP />
      <div className="w-19/20 mx-auto">
        <Suspense
          fallback={
            <div className="mx-auto ">
              <SpinnerCustom />
            </div>
          }
        >
          <PhoneContainer phonePromis={fetchUrl} />
        </Suspense>
      <div className="join">
  <input
    className="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
    checked="checked" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
      </div>
    </>
  );
};
export default HomePage;
