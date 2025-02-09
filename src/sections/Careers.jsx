import ActionButton from "../shared/ActionButton"

const Careers = () => {
  return (
    <section id="career" className="flex flex-col-reverse md:flex-row lg:gap-10 justify-center items-center mx-10 lg:mx-48">
        <div className="flex flex-1">
            <img src="" alt="robot" />
        </div>
        <div className="flex flex-1 gap-5 flex-col">
            <h3 className="text-2xl max-w-90 font-semibold">
                How Can Our Agency Benefit Your Business?
            </h3>
            <p className="text-[12px] leading-6 max-w-110">
                Our agency offers a range of services designed to elevate your business to new heights. From innovative marketing strategies to cutting-edge technology solutions, we tailor our approach to meet your unique needs. Our team of experts is dedicated to driving growth, enhancing brand visibility, and maximizing ROI. Partner with us to leverage our industry expertise, creative insights, and commitment to excellence. Together, we can transform your business challenges into opportunities for success. Let us help you achieve your goals and stand out in a competitive market.
            </p>
            <ActionButton>
                Get Free Consultation
            </ActionButton>
        </div>
    </section>
  )
}

export default Careers
