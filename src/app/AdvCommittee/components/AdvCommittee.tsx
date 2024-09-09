import React from 'react';

const nationalAdvisoryCommittee = [
    { name: "Prof. Gopakumar", affiliation: "IISC Bangalore" },
    { name: "Prof. Vivek Shrivastava", affiliation: "NIT Uttarakhand" },
    { name: "Prof. K. Shanti Swarup", affiliation: "IIT Madras" },
    { name: "Prof. Asha Rani", affiliation: "NSUT Delhi" },
    { name: "Prof. Hari Om Gupta", affiliation: "MNIT Jaipur" },
    { name: "Prof. Anwar Shahzad Siddiqui", affiliation: "JMI, New Delhi" },
    { name: "Prof. Kumar Vaibhav Srivastava", affiliation: "IIT Kanpur" },
    { name: "Dr. Ashutosh Dutta", designation: "Senior Scientist/5G Chief Strategist", affiliation: "Johns Hopkins University" },
    { name: "Prof. Chandan Chakraborty", affiliation: "IIT KGP" },
    { name: "Prof. M. Rizwan", affiliation: "Delhi Technological University, Delhi" },
    { name: "Prof. Rajesh Kumar", affiliation: "MNIT Jaipur" },
    { name: "Dr. Deepika Rani", affiliation: "NIT Jalandhar" },
    { name: "Prof. Mini Sreejeth", affiliation: "Delhi Technological University, Delhi, India" },
    { name: "Prof. Kishore Chatterjee", affiliation: "IIT Bombay" },
    { name: "Dr. Premalata Jena", affiliation: "IIT Roorkee" },
    { name: "Prof. Rachana Garg", affiliation: "DTU" },
    { name: "Prof. Dheeraj Palwalia", affiliation: "RTU, Kota, India" },
    { name: "Dr. Sandeep Anand", affiliation: "IIT Bombay" },
    { name: "Prof. Majid Jamil", affiliation: "JMI, New Delhi" },
    { name: "Prof. Shahida Khatoon", affiliation: "JMI, New Delhi" },
    { name: "Prof. Shailendra Kumar Jain", affiliation: "MANIT Bhopal" },
    { name: "Prof. S.N. Singh", affiliation: "ABV-IIITM, Gwalior" },
    { name: "Prof. Ibraheem", affiliation: "JMI, New Delhi" },
    { name: "Prof. Ashok S.", affiliation: "NIT Calicut" },
    { name: "Prof. Munna Khan", affiliation: "JMI, New Delhi" },
    { name: "Prof. B. Venkatesaperumal", affiliation: "NIT Surathkal" },
    { name: "Prof. Kanungo Barada Mohanty", affiliation: "NIT Rourkela" },
    { name: "Dr. Ranjan Kumar Behera", affiliation: "IIT Patna" },
    { name: "Dr. S. K. Parida", affiliation: "IIT Patna" },
    { name: "Prof. Sathans Suhag", affiliation: "NIT Kurukshetra" },
    { name: "Prof. Arup Kumar Goswami", affiliation: "NIT Silchar" },
    { name: "Prof. Ratna Dahiya", affiliation: "NIT Kurukshetra" },
    { name: "Prof. H. M. Suryawanshi", affiliation: "NIT Hamirpur" },
    { name: "Dr. Tarun Sehgal", affiliation: "NIT Jalandhar" },
    { name: "Mr. Sushil Kumar Soonee", affiliation: "MNIT Jaipur" },
    { name: "Dr. Atma Ram Gupta", affiliation: "NIT Kurukshetra" },
    { name: "Prof. Mini Thomas", affiliation: "JMI" },
    { name: "Dr. Vijander Singh", affiliation: "NSUT, Delhi, India" },
    { name: "Prof. Pramod Aggarwal", affiliation: "IIT Roorkee" },
    { name: "Dr. Sivaraj R.", affiliation: "NIT Jalandhar" },
    { name: "Dr. Niranjan Kumar", affiliation: "NIT Jamshedpur" },
    { name: "Prof. B.K. Panigrahi", affiliation: "IIT Delhi" },
    { name: "Dr. A. R. Kulkarni", affiliation: "Delhi Technological University, Delhi, India" },
    { name: "Dr. Mohammad Zafar", affiliation: "NIT Jalandhar" },
    { name: "Dr. Sukhjit Singh", affiliation: "NIT Jalandhar" },
    { name: "Mr. Rohan Pillai", affiliation: "Delhi Technological University, Delhi, India" },
    { name: "Prof. Manoj Fozdar", affiliation: "MNIT Jaipur" },
    { name: "Dr. Priyank Srivastava", affiliation: "IIT Delhi" },
    { name: "Prof. Sanjiv Singh Chauhan", affiliation: "MANIT Bhopal" },
    { name: "Dr. Anuradha Tomar", affiliation: "NSUT" },
    { name: "Prof. Mini Shaji Thomas", affiliation: "JMI, New Delhi" },
    { name: "Dr. Ankush Sharma", affiliation: "IIT Indore" },
    { name: "Prof. Abdul Quaiyum Ansari", affiliation: "JMI, New Delhi" },
    { name: "Prof. Anoop Singh", affiliation: "IIT Kanpur" },
    { name: "Dr. Ashwani Kumar", affiliation: "NIT Kurukshetra" },
    { name: "Dr. Souvik Ganguli", affiliation: "TIET, Patiala" },
    { name: "Prof. Panduranga Vittal K.", affiliation: "NIT Surathkal" },
    { name: "Dr. Prabodh Bajpai", affiliation: "IIT Kanpur" },
    { name: "Dr. Ranjana Sodhi", affiliation: "IIT Ropar" },
    { name: "Prof. Vaskar Sarkar", affiliation: "IIT Hyderabad" },
    { name: "Prof. Saikat Chakrabarti", affiliation: "IIT Kanpur" },
    { name: "Prof. Hitesh R. Jariwala", affiliation: "SVNIT, Surat" }
];

const internationalAdvisoryCommittee = [
   
    { name: "Prof. Philip W. T. Pong", affiliation: "New Jersey Institute of Technology, USA" },
    { name: "Prof. Sheldon S. Williamson", affiliation: "Ontario Tech, Canada" },
    { name: "Prof. Lalit Goel", affiliation: "Nanyang Technological University, Singapore" },
    { name: "Dr. Charu Sharma", affiliation: "The Arctic University of Norway" },
    { name: "Prof. Mo Jamshidi", affiliation: "University of Texas at San Antonio, USA" },
    { name: "Dr. Siew Kei", affiliation: "Nanyang Technological University, Singapore" },
    { name: "Prof. Ajit K. Verma", affiliation: "Western University of Applied Sciences, Norway" },
    { name: "Dr. Magdalini Eirinaki", affiliation: "San Jose State Univ., California" },
    { name: "Eng. Hillol Ray", affiliation: "Environmental Protection Agency, USA" },
    { name: "Prof. Ahmed Yahya", affiliation: "Al-Azhar University, EGYPT" },
    { name: "Dr. S. B. Goyal", affiliation: "City University, Malaysia" },
    { name: "Prof. Witold Pedrycz", affiliation: "University of Alberta, Canada" },
    { name: "Prof. (Dr.) Umberto Viaro", affiliation: "The University of Udine, Italy" },
    { name: "Prof. (Dr.) Atif Iqbal", affiliation: "Qatar University, Qatar" },
    { name: "Dr. Hamed Alqahtani", affiliation: "King Khalid Univ., Saudi Arabia" },
    { name: "Prof. (Dr.) Wielslaw Krajewski", affiliation:"Polish Academy of Sciences, Poland"},
    {name: "Prof. (Dr.) Nitish Patel", affiliation: "University of Auckland, New Zealand"},
  {name: "Prof. (Dr.) Shamsuzzoha M.", affiliation: "ADNOC Refining Research Center, Abu Dhabi, UAE"},
  {name: "Prof. Francois Despaux", affiliation: "Universite de Lorraine"},
  {name: "Prof. (Dr.) Bjorn Hein", affiliation: "Karlsruher Institute of Technology, Germany"},
  {name: "Dr.(Mrs.) Suhana Binti Mohd Said", affiliation: "University of Malaya, Malaysia"},
  {name: "Prof. Darius Andriukaitis", affiliation: "Kaunas University of Technology, Kaunas, Lithuania"},
  {name: "Prof. Jan Drhal", affiliation: "Czech Technical University, Prague, Czech Republic"},
  {name: "Prof. Hiroyuki Ohshima", affiliation: "Tokyo University of Science, Japan"},
  {name: "Prof. Jerzy R. Szymanski", affiliation: "Kazimierz Pulaski University of Technology and Humanities, Poland"},
  {name: "Dr. Xiao-Zhi Gao", affiliation: "Aalto University School Of Electrical Engineering, Finland"},
  {name: "Prof. Dr. Mohd Faizul Bin Mohd Sabri", affiliation: "University of Malaya, Malaysia"},
  {name: "Prof. Constantin Udriste", affiliation: "University Politehnica of Bucharest, Bucharest, Romania"},
  {name: "Professor Pradip Majumdar", affiliation: "Northern Illinois University, Dekalb, Illinois, USA"},
  {name: "Prof. Tomas Buarianek", affiliation: "VSB-Technical University of Ostrava"},
  {name: "Prof. (Dr.) Manukid Parnichkun", affiliation: "Asian Institute of Technology, Thailand"},
  {name: "Prof. Varun Ojha", affiliation: "Swiss Federal Institute of Technology Zurich, Switzerland"},
  {name: "Prof. (Dr.) Mo Jamshidi", affiliation: "University of Texas at San Antonio, United States"},
  {name: "Dr. Takuji W. Tsusaka", affiliation: "Asian Institute of Technology, Thailand"},
  {name: "Prof.(Dr.) P. Abdul Salam", affiliation: "Asian Institute of Technology, Thailand"},
  {name: "Prof. Jai Govind Singh", affiliation: "Asian Institute of Technology, Thailand"},
  {name: "Prof. Akshay Rathore", affiliation: "Singapore Institute of Technology (SIT), Singapore"},
  {name: "Prof. Frede Blaabjerg", affiliation: "Aalborg University, Denmark"},
  {name: "Prof. Anil Pahawa", affiliation: "Kansas State University, Kansas, USA"},
  {name: "Prof. T.S Sidhu", affiliation: "Ontario Tech University, Canada"},
  {name: "Prof. Sanjeevi Kumar Padmanaban", affiliation: "University of South-Eastern Norway, Porsgrunn, Norway"},
  {name: "Dr. Mohan Rajesh Elara", affiliation: "Singapore University of Technology and Design"},
  {name: "Prof. Ambrish Chandra", affiliation: "Ecole de Technologie Superiere, Montreal, Quebec, Canada"},
  {name: "Prof. Atulya Nagar", affiliation: "Liverpool Hope University, Liverpool, United Kingdom"},
  {name: "Prof. Montaz Ali", affiliation: "University of the Witwatersrand, Johannesburg, South Africa"}

];

const Committee3 = () => { 
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                {/* <h2 className="text-3xl font-bold">
                    Advisory <span className="text-blue-600">Committee</span>
                </h2> */}
            </div>

            {/* National Advisory Committee */}
            <div className="mb-12">
                <h3 className="text-3xl font-semibold mb-4">National <span className="text-blue-600">Advisory Committee</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {nationalAdvisoryCommittee.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h4 className="text-xl font-bold">{member.name}</h4>
                            <p className="text-black">{member.affiliation}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* International Advisory Committee */}
            <div className="mb-12">
                <h3 className="text-3xl font-semibold mb-4">International <span className="text-blue-600"> Advisory Committee</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {internationalAdvisoryCommittee.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h4 className="text-xl font-bold">{member.name}</h4>
                            <p className="text-black">{member.affiliation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committee3;
