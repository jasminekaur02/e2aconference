import React from 'react';

// Define the type for each committee member
type CommitteeMember = {
    name: string;
    designation?: string;
    affiliation: string;
};

// Define the type for the committee object with an index signature
type CommitteeType = {
    [key: string]: CommitteeMember[];
};

// Define the committee data with the new type
const committee: CommitteeType = {
    "Technical Programme Chair(s)": [
        { name: "Prof. Mohamed Dahidah", affiliation: "NUS, UK" },
        { name: "Dr. Piyush Verma", designation: "Senior Governance Expert-Energy", affiliation: "United Nation Development Programme, New York, USA" },
        { name: "Prof. Barjeev Tyagi", affiliation: "IIT Roorkee" },
        { name: "Prof. Manoj Tripathy", affiliation: "IIT Roorkee" },
        { name: "Dipankar Deb", affiliation: "IITRAM, Gujrat" },
        { name: "Prof. Arun Khosla", designation: "Professor and Head (AI)", affiliation: "NIT Jalandhar" },
        { name: "Prof. B S Saini", designation: "Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Neetu Sood", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Nitin Gupta", affiliation: "MNIT Jaipur" },
        { name: "Prof. Harsh Verma", affiliation: "NIT Jalandhar" },
        { name: "Dr. Rajneesh Rani", affiliation: "NIT Jalandhar" },
        { name: "Dr. K. P. Sharma", affiliation: "NIT Jalandhar" },
        { name: "Dr. Amritpal Singh", affiliation: "NIT Jalandhar" },
        { name: "Dr. Prashant Kumar", affiliation: "NIT Jalandhar" },
        { name: "Prof. Vinod Kumar Yadav", designation: "Professor", affiliation: "DTU, Delhi, India" },
        { name: "Dr. Takuji W. Tsusaka", affiliation: "Dept. of Development and Sustainability, Asian Institute of Technology, Thailand" },
        { name: "Dr. Charu Sharma", affiliation: "UiT The Arctic University of Norway" },
        { name: "Prof. Asheesh Kumar Singh", affiliation: "MNNIT Allahabad, India" },
        { name: "Prof. Yogesh Singh Chauhan", affiliation: "IIT Kanpur" },
        { name: "Prof. Mohd. Rihan Alvi", affiliation: "AMU, Aligarh" },
        { name: "Prof. A.Q. Ansari", affiliation: "JMI, New Delhi" },
        { name: "Dr. Alper Kerem", affiliation: "Kahramanmaras Sutcu Imam University, Kahramanmaras, Turkey" },
        { name: "Prof. Shaunak Sen", affiliation: "IIT Delhi" },
        { name: "Prof. Indra Narayan Kar", affiliation: "IIT Delhi" },
        { name: "Prof. S. Janardhanan", affiliation: "IIT Delhi" },
        { name: "Prof. Saif Khan Mohammed", affiliation: "IIT Delhi" },
        { name: "Prof. Vijander Singh", affiliation: "NSUT Delhi" },
        { name: "Prof. K.K Pant", designation: "Director", affiliation: "IIT Roorkee" },
        { name: "Prof. B.K. Panigrahi", affiliation: "Indian Institute of Technology Delhi" },
        { name: "Prof. M.S. Gaur", designation: "Director", affiliation: "IIT Jammu" },
        { name: "Prof. Ajay Sharma", designation: "Director", affiliation: "NIT Delhi" },
        { name: "Prof. N.P. Padhy", designation: "Director", affiliation: "MNIT Jaipur" },
        { name: "Prof. H.M. Suryawanshi", designation: "Director", affiliation: "NIT Hamirpur" },
        { name: "Prof. Shailendra Jain", affiliation: "MANIT Bhopal" },
        { name: "Prof. Anish Sachdeva", affiliation: "NIT Jalandhar" },
        { name: "Prof. Rohit Mehra", affiliation: "NIT Jalandhar" },
        { name: "Prof. Raman Bedi", affiliation: "NIT Jalandhar" },
        { name: "Prof. R.K. Garg", affiliation: "NIT Jalandhar" },
        { name: "Prof. S.P. Singh", affiliation: "NIT Jalandhar" },
        { name: "Prof. A.L. Sangal", affiliation: "NIT Jalandhar" },
        { name: "Prof. A.K Jana", affiliation: "NIT Jalandhar" },
        { name: "Prof. B.S. Kaith", affiliation: "NIT Jalandhar" },
        { name: "Prof. Arvind Agnihotri", affiliation: "NIT Jalandhar" },
        { name: "Prof. A.K. Chaudhary", affiliation: "NIT Jalandhar" },
        { name: "Dr. Jatinder Kumar Ratan", affiliation: "NIT Jalandhar" },
        { name: "Dr. Rakesh Kumar (CY)", affiliation: "NIT Jalandhar" },
        { name: "Dr. Harimurugan Devarajan", affiliation: "NIT Jalandhar" },
        { name: "Dr. Kailash Sharma", affiliation: "NIT Jalandhar" },
        { name: "Dr. Jaspal Kaur Saini", affiliation: "NIT Jalandhar" },
        { name: "Dr. Muhammad Ramadan Saifuddin", designation: "Assistant Professor", affiliation: "Newcastle University, Singapore" },
        { name: "Dr. Pranab K Mandol", affiliation: "IIT Guwahati, Assam, India" },
        { name: "Dr. Francesco De Leonardis", designation: "Associate Professor", affiliation: "Politecnico di Bari, Italy" },
        { name: "Prof. Dr. Piotr Bilski", designation: "Professor, Vice-Director in charge of science", affiliation: "Warsaw University of Technology, Poland" },
        { name: "Prof. Dr. Mohd Faizul Bin Mohd Sabri", affiliation: "University of Malaya, Kuala Lumpur, Malaysia" },
        { name: "Dr. Prakash Diwadi", affiliation: "NIT Uttarakhand, India" },
        { name: "Dr. Nafees Ahamad", affiliation: "DIT University, Dehradun" },
        { name: "Dr. Arun Balodi", affiliation: "Atria Institute of Technology, Bengaluru" },
        { name: "Dr. Nitin Uniyal", affiliation: "UPES, Dehradun" },
        { name: "Dr. P. Thakur", affiliation: "GEU, Dehradun" },
        { name: "Dr. Irfan-Ul-Hasan", affiliation: "GEU, Dehradun" }
    ],
    "Workshop Chair(s)": [
        { name: "Dr Anil Kumar Yadav", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Arvind Kumar Prajapati", affiliation: "NIT Jamshedpur" }
    ],
    "Workshop Co-Chair(s)": [
        { name: "Mr Deepak Kumar", designation: "Assistant Professor", affiliation: "RKGIT Ghaziabad" },
        { name: "Mr Ram Kumar", designation: "Assistant Professor", affiliation: "GEC, Khagaria, Bihar" }
    ],
    "Programme Committee": [
        { name: "Er Narinder Singh Bhangal", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Rajesh Singla", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Roop Pahuja", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Sheela Tiwari", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Amit Kumar Singh", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Karan Veer", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Om Prakash Verma", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Anil Kumar Yadav", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Deblina Biswas", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Mahendra Kumar", designation: "Assistant Professor", affiliation: "NIT Jalandhar" }
    ],
    "Scientific Committee": [
        { name: "Prof. Yogesh Vijay Hote", designation: "Professor", affiliation: "IIT Roorkee" },
        { name: "Prof. Celia Shahnaz", designation: "",affiliation: "BUET, Bangladesh" },
        { name: "Prof. Moinuddin", designation: "",affiliation: "Apeejay Stya University, Gurugram" },
        { name: "Prof. Akhtar Kalam", designation: "",affiliation: "Australia" },
        {name:"Prof Shahida Khatoon, JMI, New Delhi",designation: "",affiliation: ""},
        { name: "Prof. Janusz Kacprzyk",designation: "", affiliation: "Poland" },
        { name: "Prof. M.N.S. Swamy", designation: "",affiliation: "Canada" },
        { name: "Prof. Mukesh Kr. Pathak",designation: "", affiliation: "IIT Roorkee" },
        { name: "Prof. R.S. Anand",designation: "", affiliation: "IIT Roorkee" },
        { name: "Prof. Premalata Jena", designation: "",affiliation: "IIT Roorkee" },
        { name: "Dr. Pawan Sharma",designation: "", affiliation: "UiT The Arctic University of Norway" },
        { name: "Prof. Sukumar Ray Chaudhuri", designation: "",affiliation: "MSIT, India" },
        { name: "Prof. C. K. Chanda",designation: "", affiliation: "Indian Institute of Engineering Science and Technology, Shibpur, Howrah" },
        { name: "Prof. Vishal Kumar",designation: "", affiliation: "IIT Roorkee" },
        { name: "Dr. Abhisek Kumar Behera",designation: "", affiliation: "IIT Roorkee" },
        { name: "Dr. Abdul Saleem Mir",designation: "", affiliation: "IIT Roorkee" },
        { name: "Dr. Subashish Datta",designation: "", affiliation: "IIT Delhi" },
        { name: "Dr. Deepak U. Patil", designation: "",affiliation: "IIT Delhi" },
        { name: "Dr. Ankit Singhal", designation: "",affiliation: "IIT Delhi" },
        { name: "Dr. Akhilesh Mathur",designation: "", affiliation: "Malaviya National Institute of Technology Jaipur" },
        { name: "Md Nishat Anwar", designation: "",affiliation: "NIT Patna" },
        { name: "Mr. Yousuf Haider", designation: "Assistant Professor", affiliation: "IMS Engineering College, Ghaziabad" },
        { name: "Mr. Dipu Kumar", designation: "Assistant Professor", affiliation: "RKGIT, Ghaziabad" },
        { name: "Mr. Sadat Ali Khan", designation: "",affiliation: "The Maldives National University" },
        { name: "Mr. Neeraj Kumar", designation: "Assistant Professor", affiliation: "RKGIT, Ghaziabad" },
        { name: "Mr. Vivek Ahlawat",designation: "", affiliation: "NITTTR, Chandigarh" },
    ],
    "Industrial and Entrepreneur Chair(s)": [
        { name: "Sh. Subrahmanyam Pulipaka", designation: "Chief Executive Officer", affiliation: "National Solar Energy Federation of India" },
        { name: "Sh. Surinder Ahuja", designation: "Director", affiliation: "Sunmaster Pvt. Ltd., New Delhi" },
        { name: "Mr. Vipin Gupta",designation: "", affiliation: "Robert Bosch GmbH, Germany" },
        { name: "Sh. Sachin Attry", designation: "",affiliation: "Swastik Associates, Dehradun" },
        {name: "Mr Gagan Veramani", designation:"Founder and CEO, Mysun Solar", affiliation:"New Delhi"}
    ],
    "Conference Proceedings, Printing & Publication Committee": [
        { name: "Dr Afzal Sikander", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Ravi Verma", designation: "Assistant Professor", affiliation: "NIT" },
    ],
    "Publicity and Media Committee Chair(s)": [
        { name: "Dr Balwinder Raj", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Neetu Sood", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
    ],
    "Finance Committee Chair(s)": [
        { name: "Prof. Dilbag Singh", designation: "Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Afzal Sikander", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Karan Jain", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        
    ],
    "Steering Committee" : [],
    "Accommodation and Transportation Committee Chair(s)": [
        { name: "Dr. Rakesh Kumar (CY)", designation: "", affiliation: "NIT Jalandhar" },
        { name: "Dr. Narendra Kumar", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Deepika Rani", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        {name:"Dr Neelam", designation:"Assistant Professor", affiliation:"NIT Jalandhar"}
    ],
    "Registration and Hospitality Committee": [
        { name: "Mr. Sumit Kataria", designation: "", affiliation: "NIT Jalandhar" },
        { name: "Ms. Karchana Kumari ", designation: "", affiliation: "NIT Jalandhar" },
    ],
    "Track Chair(s)": [
        { name: "Prof. Jerzy R. Szymański", designation: "", affiliation: "Poland" },
        { name: "Dr Khalid Abidi", designation: "", affiliation: "Singapore" },
        { name: "Prof. Yogesh Vijay Hote", designation: "Professor", affiliation: "IIT Roorkee" },
        { name: "Dr. Akhilesh Mathur", designation: "", affiliation: "MNIT, Jaipur" },
        { name: "Md Nishat Anwar", designation: "", affiliation: "NIT Patna" },
        {name: "Mr Davendra Kumar", designation: "", affiliation:"RKGIT, Ghaziabad"}
    ],
    "Track Co-Chair(s)": [
        { name: "Prof. Mamta Khosla", designation: "Professor and Dean (International Affairs)", affiliation: "NIT Jalandhar" },
        { name: "Dr. Indu Saini", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr Anil Kumar Yadav", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        
        { name: "Mr. Deepak Kumar", designation: "Assistant Professor", affiliation: "RKGIT, Ghaziabad" },
    ],
    "Women @ E2ACON 2025":[
        { name: "Dr. Marta Zurek-Mortka", designation: "", affiliation: "Poland" },
        { name: "Prof. Celia Shahnaz", designation: "Professor", affiliation: "BUET, Bangladesh" },
        { name: "Dr. Charu Sharma", affiliation: "UiT The Arctic University of Norway" },
        { name: "Prof. Premalata Jena", affiliation: "IIT Roorkee" },
        { name: "Prof. Mamta Khosla", designation:"Professor and Dean (International Affairs)",affiliation: "NIT Jalandhar" },
        { name: "Dr. Indu Saini", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Neetu Sood", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Prof. Shahida Khatoon", affiliation: "JMI, New Delhi" },
        { name: "Dr. Richa Sharma", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Deepika Rani", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Neelam", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Rajneesh Rani",  affiliation: "NIT Jalandhar" },
        { name: "Dr. Jaspal Kaur Saini",  affiliation: "NIT Jalandhar" },
        { name: "Dr. Roop Pahuja", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Sheela Tiwari", designation: "Associate Professor", affiliation: "NIT Jalandhar" },
        { name: "Dr. Deblina Biswas", designation: "Assistant Professor", affiliation: "NIT Jalandhar" },
    
    ]
};

const Committee2 = () => {
    return (
      <section className="py-12">
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl font-bold">
            Program <span className="text-blue-600">Committee</span>
          </h2> */}
        </div>
  
        {/* Render committee without images */}
        {Object.keys(committee).map((section, idx) => (
          <div key={idx} className="mb-12">
            {/* Center text on small screens, left-align on large screens */}
            <h3 className="text-2xl font-semibold mb-4 text-center sm:text-left mt-2 sm:mt-4">
              {section}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {committee[section].map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-blue-500">{member.designation}</p>
                  <p className="text-black">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Committee2;
  