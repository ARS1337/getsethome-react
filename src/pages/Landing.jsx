import "../styles/landing-page.css";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import RadioInputGroup from "../components/RadioInputGroup";
import RadioInput from "../components/RadioInput";
import DateInput from "../components/DateInput";
import Footer from "../components/Footer";
import { footerLanding } from "../mockData";

export default function Landing() {
  return (
    <>
      <Header>Owner Profile</Header>
      <main>
        <div className="form-fields d-flex flex-col">
          <TextInput id={"firstName"} label={"First name"} value={"Venkatesh"} />
          <TextInput id={"lastname"} label={"Last name"} value={"Gurunathan"} />
          <RadioInputGroup label={"Gender"}>
            <RadioInput id={"male"} label={"Male"} value={"male"} />
            <RadioInput id={"female"} label={"Female"} value={"female"} />
            <RadioInput id={"company"} label={"Company"} value={"company"} />
          </RadioInputGroup>
          <TextInput id={"emailID"} label={"Email ID"} value={"venketesh.gurunathan@getsethome.com"} />
          <TextInput id={"mobileNumber"} label={"Mobile Number"} value={"900990099"} />
          <DateInput id={"dob"} label={"Date of Birth"} />
          <RadioInputGroup label={"Agreement Signing Authority"}>
            <RadioInput id={"self"} label={"Self"} value={"self"} />
            <RadioInput id={"poa"} label={"POA"} value={"poa"} />
          </RadioInputGroup>
          <TextInput id={"revenueSplit"} label={"Revenue Split"} value={"100%"} />
        </div>
        <div className="bottom-placeholder"></div>
        <Footer icons={footerLanding} />
      </main>
    </>
  );
}
