import "../Css/EmailUs.css";

const EmailUs = () => {
  return (
    <div className="EmailUs_con">
      <h2>Get Our Emails to Stay In The Know</h2>
      <div className="Emailin">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <button>SUBSCRIBE</button>
      </div>
      <p>
        By clicking Subscribe, you are submitting your information to
        charity:water.
      </p>
      <p>
        This site is protected by reCAPTCHA and the Google Privacy
        <br />
        PolicyandTermsofServiceapply.
      </p>
    </div>
  );
};

export default EmailUs;
