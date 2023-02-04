// ---------------------->
// ----------------------> App Start
// ---------------------->
API.getTeacherData(teacherId) -> DB -> returns (teacherData)

teacherData = {
    name: string,
    classes: classes[],
    preferences: preferences
}

classes = [{
        id: number,
        name: string
}]

// To Implement later
preferences = {
    startingClassId: number
}

// ---------------------->
// ----------------------> App then pulls classsData for first class or whatever the preferences.startingClassId says
// ---------------------->
API.getClass(classId) -> DB -> returns (classData, studentOverview, assignmentGroup, assignments)



classData = {
    classId: Number,
    students: studentOverview[],
    assignmentGroup: assignmentGroup[],
    assignments: assignments
}

// used on main page
studentOverview = [{
    id: string,
    studentId: string,
    name: string,
    goesBy: string,
    currentGrade: number,
    preferredPronouns: number,
 }]

//  saved in store
assignmentGroup = [{
    id: Number,
    title: string,
    description: string,
    weight: string,
    individualAssignments: assignmentId[],
}]

//  saved in store
assignments =  {
    idNumber: {
        name: string,
        description: string,
        defaultGrade: number
    },
}






teacherData = {
    name: 'Mr. Jenkins',
    classes: [
        {
            id: 254626,
            name: 'Drawing (8am)'
        },
        {
            id: 254672,
            name: '2D Design (2pm)'
        }
    ],
    preferences: {
        startingClassId: 254626
    }
}


classData = {
    classId: 254626,
    students: studentOverview,
    assignmentGroup: assignmentGroup,
    assignments: assignments
}


studentOverview = [
    {
        id: 01,
        studentId: 10102,
        name: 'James Holden',
        goesBy: 'James',
        currentGrade: 75.9,
        preferredPronouns: 2,
    }, 
     {
        id: 02,
        studentId: 10106,
        name: 'Naomi Nagata',
        goesBy: 'Naoimi',
        currentGrade: 95.9,
        preferredPronouns: 1,
    }, 
]

 assignmentGroup = [
    {
        id: D23,
        title: 'Still Life Homework',
        description: 'Daily Still life assignments',
        weight: 30,
        individualAssignments: [2345, 2348]
    },
    {
        id: D45,
        title: 'Final Project',
        description: 'Triptic of drawings of the students choosing',
        weight: 70,
        individualAssignments: [2366]
    }
]

assignments = {
    2345: {
        name: 'Still Life 1',
        description: 'Still life focusing on shadows',
        defaultGrade: 80
    },
    2348: {
        name: 'Still Life 2',
        description: 'Still life focusing on perspective',
        defaultGrade: 80
    },
    2366: {
        name: 'Final Project',
        description: 'Triptic of a still scene',
        defaultGrade: 70
    }
}





// ---------------------->
// ----------------------> Click on student
// ---------------------->
API.getStudetDetails(studentId) -> DB -> returns (studentDetail)


 studentDetail = {
    studentId: Number,
    schoolId: Number,
    assignmentDetails: assintmentDetail[]
 }

assintmentDetail =[{
    id: Number,
    group: assignmentGroupId,
    grade: number,
    notes: string,
   
}]


API.getStudetDetails(01)

 studentDetail = {
    studentId: 01,
    assignmentDetails: assignmentDetails
 }

 assignmentDetails = [
    {
    id: 2345,
    grade: 80,
    notes: 'Blending needs work but overall composition is great'
    }, 
    {
    id: 2348,
    grade: 94,
    notes: 'Excellent perspective, needs light practice with 3-point'
    }, 
     {
    id: 2366,
    grade: 91,
    notes: 'Great piece but did not include enough foreground elements to really see the 1 point perspective as per assignment'
    }, 
]
