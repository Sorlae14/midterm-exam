import React from "react";
const studenInfo={
    firstname:':Natthasit',
    lastname:':Srikaeo',
    studentId:':026630491020-8',
    email:':natthasit.sri@rmutto.ac.th',
    contactChannel:':Phone:063-14722-59',
};

const PetHomePage= () => {
    return(
    <div style={{fontFamily:'Arial, sans-serif',backgroundColor: '#ADD8E6'}}>
        <h1>ข้อมูลส่วนตัวของผู้สอบ</h1>
        <p><strong>ชื่อ</strong>{studenInfo.firstname}</p>
        <p><strong>นามสกุล</strong>{studenInfo.lastname}</p>
        <p><strong>รหัสนักศึกษา</strong>{studenInfo.studentId}</p>
        <p><strong>อีเมล</strong>{studenInfo.email}</p>
        <p><strong>ช่องทางการติดต่อ</strong>{studenInfo.contactChannel}</p>
    </div>

    );
};


export default PetHomePage