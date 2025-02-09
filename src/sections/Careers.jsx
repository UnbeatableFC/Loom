import ActionButton from "../shared/ActionButton"

const Careers = () => {
  return (
    <section id="career" className="flex py-10 md:py-18 bg-blue-600/70 flex-col-reverse md:flex-row lg:gap-25 gap-10 justify-center items-center px-10 lg:px-48">
        <div className="flex flex-1 w-48 h-88 bg-slate-200/20 [clip-path:polygon(20%_0,_30%_0,_40%_10%,_60%_10%,_70%_0,_80%_0,_80%_20%,_100%_20%,_100%_30%,_90%_40%,_90%_60%,_100%_70%,_100%_80%,_80%_80%,_80%_100%,_70%_100%,_60%_90%,_40%_90%,_30%_100%,_20%_100%,_20%_80%,_0_80%,_0_70%,_10%_60%,_10%_40%,_0_30%,_0_20%,_20%_20%)] justify-center items-center">
            <img src="/assets/robot2.png" alt="robot" width={270} />
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
