import React from 'react';

const committee = {
    "Technical Program Chairs": [
        { name: "Prof. Mamta Khosla",
             designation: "Professor and Dean (International Affairs)",
             affiliation:"NIT Jalandhar" },
        { name: "Dr. Indu Saini", designation: "Associate Professor", affiliation:"NIT Jalandhar" },
        { name: "Prof. Arun Khosla", designation: "Professor and Head (AI)", affiliation:"NIT Jalandhar" },
        { name: "Prof. B S Saini", designation: "Professor",affiliation: 
            "NIT Jalandhar" },
        { name: "Prof. Yogesh Singh Chauhan", affiliation: "IIT Kanpur" },
        { name: "Prof. Mohd. Rihan Alvi", affiliation: "AMU, Aligarh" },
        { name: "Prof. A.Q. Ansari", affiliation: "JMI, New Delhi" },
        { name: "Prof. Mohamed Dahidah", affiliation: "NUS, UK" },
        { name: "Prof. Barjeev Tyagi", affiliation: "IIT Roorkee" },
        { name: "Prof. Harsh Verma", affiliation: "NIT Jalandhar" },
        { name: "Prof. Manoj Tripathy", affiliation: "IIT Roorkee" },
        { name: "Dr. Neetu Sood", designation:"Associate Professor" ,affiliation: "NIT Jalandhar" },
        { name: "Dr. Nitin Gupta", affiliation: "MNIT Jaipur" },
        { name: "Dr. Rajneesh Rani", affiliation: "NIT Jalandhar" },
        { name: "Dr. K.P. Sharma", affiliation: "NIT Jalandhar" },
        { name: "Dr. Amritpal Singh", affiliation: "NIT Jalandhar" },
        { name: "Dr. Prashant Kumar", affiliation: "NIT Jalandhar" },
        { name: "Prof. Vinod Kumar Yadav",designation:"Professor", affiliation: " DTU, Delhi, India" },
        { name: "Dr. Piyush Verma", designation: "Senior Governance Expert-Energy",affiliation: "UNDP, New York, USA" },
        { name: "Dr. Takuji W. Tsusaka", affiliation: "Asian Institute of Technology, Thailand" },
        { name: "Dr. Charu Sharma", affiliation: "UiT The Arctic University of Norway" },
        { name: "Prof. Asheesh Kumar Singh", affiliation: "MNNIT Allahabad, India" },
        { name: "Dr. Marta Zurek-Mortka", designation: "Lukasiewicz Research Network",affiliation: "Institute for Sustainable Technologies, Radom,Poland" },
        { name: "Dr. Alper Kerem", affiliation: "Kahramanmaras Sutcu Imam University, Turkey" },
        { name: "Prof. Shaunak Sen", affiliation: "IIT Delhi" },
        { name: "Prof. Indra Narayan Kar", affiliation: "IIT Delhi" },
        { name: "Prof. S. Janardhanan", affiliation: "IIT Delhi" },
        { name: "Prof. Saif Khan Mohammed", affiliation: "IIT Delhi" },
        { name: "Prof. Vijander Singh", affiliation: "NSUT Delhi" },
        { name: "Prof. K.K Pant", affiliation: "Director, IIT Roorkee" },
        { name: "Prof. B.K. Panigrahi", affiliation: "IIT Delhi" },
        { name: "Prof. M.S. Gaur", affiliation: "Director, IIT Jammu" },
        { name: "Prof. Ajay Sharma", affiliation: "Director, NIT Delhi" },
        { name: "Prof. N.P. Padhy", affiliation: "Director, MNIT Jaipur" },
        { name: "Prof. H.M. Suryawanshi", affiliation: "Director, NIT Hamirpur" },
        { name: "Prof. Shailendra Jain", affiliation: "MANIT Bhopal" },
        { name: "Prof. Anish Sachdeva", affiliation: "NIT Jalandhar" },
        { name: "Prof. Rohit Mehra", affiliation: "NIT Jalandhar" },
        { name: "Prof. Raman Bedi", affiliation: "NIT Jalandhar" },
        { name: "Prof. R.K. Garg", affiliation: "NIT Jalandhar" },
        { name: "Prof. S.P. Singh", affiliation: "NIT Jalandhar" },
        { name: "Prof. A.L. Sangal", affiliation: "NIT Jalandhar" },
        { name: "Prof. A.K. Jana", affiliation: "NIT Jalandhar" },
        { name: "Prof. B.S. Kaith", affiliation: "NIT Jalandhar" },
        { name: "Prof. Arvind Agnihotri", affiliation: "NIT Jalandhar" },
        { name: "Prof. A.K. Chaudhary", affiliation: "NIT Jalandhar" },
        { name: "Dr. Jatinder Kumar Ratan", affiliation: "NIT Jalandhar" },
        { name: "Dr. Rakesh Kumar (CY)", affiliation: "NIT Jalandhar" },
        { name: "Dr. Harimurugan Devarajan", affiliation: "NIT Jalandhar" },
        { name: "Dr. Kailash Sharma", affiliation: "NIT Jalandhar" },
        { name: "Dr. Jaspal Kaur Saini", affiliation: "NIT Jalandhar" },
        { name: "Dr. Muhammad Ramadan Saifuddin", designation:"Assistant Professor", affiliation: "Newcastle University, Singapore" },
        { name: "Dr. Pranab K Mandol", affiliation: "IIT Guwahati, Assam, India" },
        { name: "Dr. Francesco De Leonardis",designation:"Associate Professor", affiliation: "Politecnico di Bari, Italy" },
        { name: "Prof. Dr. Piotr Bilski", designation: "Vice-Director in charge of science", affiliation: "Warsaw University of Technology, Poland" },
        { name: "Prof. Dr. Mohd Faizul Bin Mohd Sabri", affiliation: "University of Malaya, Kuala Lumpur, Malaysia" },
        { name: "Dr. Prakash Diwadi", affiliation: "NIT Uttarakhand, India" },
        { name: "Dr. Nafees Ahamad", affiliation: "DIT University, Dehradun" },
        { name: "Dr. Arun Balodi", affiliation: "Atria Institute of Technology, Bengaluru" },
        { name: "Dr. Nitin Uniyal", affiliation: "UPES, Dehradun" },
        { name: "Dr. P. Thakur", affiliation: "GEU, Dehradun" },
        { name: "Dr. Irfan-Ul-Hasan", affiliation: "GEU, Dehradun" },
    ],
    "Workshop Chair(s)": [
        { name: "Dr. Anil Kumar Yadav", designation:"Assistant Professor",affiliation: " NIT Jalandhar" },
        { name: "Dr. Arvind Kumar Prajapati", affiliation: "NIT Jamshedpur" },
    ],
    "Workshop Co-Chair(s)": [
        { name: "Mr. Deepak Kumar", designation:"Assistant Professor", affiliation: "RKGIT, Ghaziabad" },
        { name: "Mr. Ram Kumar", affiliation: "Assistant Professor, GEC, Khagaria, Bihar" },
    ],
    // Add other committees here similarly...
};

const Committee2 = () => {
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    Program <span className="text-blue-600">Committee</span>
                </h2>
            </div>

            {/* Render committee without images */}
            {Object.keys(committee).map((section, idx) => (
                <div key={idx} className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">{section}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {committee[section].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
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
