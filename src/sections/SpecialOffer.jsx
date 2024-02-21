import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special</span> Offer
            <br />
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, necessitatibus aut at dolores iusto quam minima? Quo,
            quis tempore culpa maiores provident, sed perspiciatis rem, quisquam
            officiis pariatur exercitationem. Aliquam.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            itaque, tempora harum repellendus repudiandae nesciunt.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SpecialOffer;
