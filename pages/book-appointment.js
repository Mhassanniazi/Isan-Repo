import Layout from "../components/layout/layout";
import Hero from "../components/book-appointment/hero/Hero";
// import teacher1 from "../assets/images/appointment/Image1.png";
import teacher1 from "../assets/images/about-us/person1.svg";
import teacher2 from "../assets/images/about-us/person2.svg";
import teacher3 from "../assets/images/about-us/person7.svg";
import teacher4 from "../assets/images/about-us/person8.svg";
import teacher5 from "../assets/images/about-us/person5.svg";
import teacher6 from "../assets/images/about-us/person6.svg";
import teacher7 from "../assets/images/about-us/person4.svg";
import teacher8 from "../assets/images/about-us/person3.svg";
import Content from "../components/book-appointment/content/Content";
import GrayDiv from "../components/book-appointment/gray-div/GrayDiv";

const heroContent = {
  title_part1: "Appointment scheduling ",
  title_part2: "and rates",
  paragraph1:
    "Our one-on-one coaching services can help you build self-confidence, improve your relationships, support your career ambitions, or help you achieve your goals.",
};

const appointmentDetails = [
  {
    id: "Farhan_Ahmed",
    profileImg: teacher1,
    name: "Farhan Ahmed",
    slugName: "Farhan_Ahmed",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Farhan Ahmed is a Licensed Clinical Professional Counselor and the founder of Ihsan Coaching. He completed his Masters in Clinical Mental Health Counseling from Argosy University. Prior to that, he graduated from Benedictine University with a Bachelors in Psychology. Farhan has worked as a therapist focusing on anxiety, depression, OCD, marital discord, sexual intimacy, self-esteem issues, anger management, manic disorders, and spiritual/personal development.",
    sessionsAvailability: [
      [
        "Individual sessions",
        "https://calendly.com/farhan-ahmed/individual-session",
      ],
      [
        "Four individual sessions",
        "https://calendly.com/farhan-ahmed/couples-session",
      ],
      [
        " Couples sessions ",
        "https://calendly.com/farhan-ahmed/couples-session",
      ],
      [
        "Four couples sessions",
        "https://calendly.com/farhan-ahmed/first-couples-session",
      ],
      [
        "Premarital coaching",
        "https://calendly.com/farhan-ahmed/premarital-coaching",
      ],
    ],
  },
  {
    id: "Asmaa_Mahran",
    profileImg: teacher3,
    name: "Asmaa Mahran",
    slugName: "Asmaa_Mahran",
    designation: "Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Asmaa Mahran holds a Master’s degree in Science of Psychology from California Southern University, a diploma in hypnosis from Hypnosis Motivation Institute College of Hypnosis, and is certified in neuro-linguistics programming (NLP). Asmaa is also certified in marriage counseling from Gottman Institute and is certified in trauma recovery. Asmaa has experience working with clients dealing with trauma, anxiety, premarital coaching, relationship and marital conflicts, victims of abusing and narcissistic relationships, self-esteem issues, and vocational and avocational-related issues.",
    sessionsAvailability: [
      [
        "Individual sessions",
        "https://calendly.com/asmaa-mahran/individual-session",
      ],
      [
        "Four individual sessions",
        "https://calendly.com/asmaa-mahran/first-individual-session",
      ],
      [
        " Couples sessions ",
        "https://calendly.com/asmaa-mahran/couples-session",
      ],
      [
        "Four couples sessions",
        "https://calendly.com/asmaa-mahran/first-couples-session",
      ],
    ],
  },
  {
    id: "Rehena_Rana",
    profileImg: teacher5,
    name: "Rehena Rana",
    slugName: "Rehena_Rana",
    designation: "Coach",
    status: "Master’s in Pastoral Studies",
    email: "mohammed.bemat@ihsancoaching.com",
    description:
      " Rehena Rana is a licensed psychologist in the state of Michigan. She graduated with a Masters in Clinical Psychology from the Michigan School of Professional Psychology and obtained her B.A. in Psychology and Political Science from the University of Michigan-Dearborn. Her professional experience consists of providing crisis therapy, individual therapy, and family therapy in various settings, including but not limited to community mental health, private practice, and the non-profit sector. She is currently serving as a Milieu Director in a child welfare agency that serves children, youth, and families who are abused, neglected, or at risk.",

    sessionsAvailability: [
      [
        "Individual sessions",
        "https://calendly.com/rehena-rana/individual-session",
      ],
      [
        "Four individual sessions",
        "https://calendly.com/rehena-rana/first-individual-session",
      ],

      [
        "Premarital coaching",
        "https://calendly.com/rehena-rana/premarital-coaching",
      ],
    ],
  },
  {
    id: "Rawand_Abdelghani",
    profileImg: teacher4,
    name: "Rawand Abdelghani",
    slugName: "Rawand_Abdelghani",
    designation: "Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Rawand Abdelghani is a Licensed Clinical Social Worker (LCSW) and therapist. She earned her Masters of Science in Social Work and her B.A. in Psychology from the University of Texas at Austin. She has over 5 years of experience providing mental health services and counseling to adults, adolescents, children, and families. Throughout her career she’s worked with clients from various backgrounds and different ages. Rawand has a passion for working within the Muslim community and enjoys serving as a mentor to Muslim youth and college students.",
    sessionsAvailability: [
      [
        "Individual sessions",
        "https://calendly.com/rawand-abdelghani/individual-session",
      ],
      [
        "Four individual sessions",
        "https://calendly.com/rawand-abdelghani/first-individual-session",
      ],
    ],
  },

  // {
  //   id: "Mohammed_Bemat",
  //   profileImg: teacher6,
  //   name: "Mohammed Bemat",
  //   slugName: "Mohammed_Bemat",
  //   designation: "Founder & Coach",
  //   status: "Masters in Clinical Mental Health Counseling",
  //   email: "farhan.ahmed@ihsancoaching.com",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
  //   sessionsAvailability: [
  //     ["Individual Sessions","https://calendly.com/mohammed-bemat/individual-session"],
  //     ["First individual Session","https://calendly.com/mohammed-bemat/first-individual-session"],
  //    [ " Couples Sessions ","https://calendly.com/mohammed-bemat/couples-session"],
  //    [ "First couples Sessions","https://calendly.com/mohammed-bemat/first-couples-session"]
  //   ],
  // },
];
const appointmentDetails2 = [
  {
    id: "Mufti_Zeshan_Ahmed",
    profileImg: teacher7,
    name: "Mufti Zeshan Ahmed",
    slugName: "Mufti_Zeshan_Ahmed",
    designation: "Religious Consultant",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Mufti Zeshan Ahmed was born and raised in Springfield, OH.  After moving to Chicago in his early teens, he enrolled at the Institute of Islamic Education (Elgin, IL) to memorize the Quran.  Upon successful completion of his memorization in 2011, his desire for higher Islamic education led him to enroll in and successfully complete the Alim course at the same institute.  In 2017, Mufti Zeshan decided to further his education by specializing in the field of issuing legal verdicts (iftaa) at Darul Iftaa Chicago under the tutelage of Mufti Abrar Mirza (may Allah protect him).",
  },
  {
    id: "Imam_Azhar_Subedar",
    profileImg: teacher8,
    name: "Imam Azhar Subedar",
    slugName: "Imam_Azhar_Subedar",
    designation: "Religious Consultant",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:

      "Imam Azhar Subedar was born and raised in the West. He was also educated on the Religion of Islam in the West. He graduated from his 10-year studies of Islam in the U.K. As a Religious Scholar with a Master’s in Islamic Sciences and Arabic Literature, his vision is to address the current needs of the Muslim community by bringing relevancy to the Holy text while confronting the social issues of today’s world from a moral perspective. ",
  },
];

export default function BookAppointment({ id }) {
  return (
    <Layout>
      <Hero data={heroContent} />
      <Content
        appointments={appointmentDetails}
        appointments2={appointmentDetails2}
      />
      <GrayDiv />
    </Layout>
  );
}
