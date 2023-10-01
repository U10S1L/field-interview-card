function generateBbCode(data) {

    return `[font=Arial][center]LOS SANTOS POLICE DEPARTMENT
[size=120][color=black][b]FIELD INTERVIEW CARD (FRONT)[/b][/font][/color][/size][/center]

[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]NAME (FIRST, MIDDLE, LAST)[/size]
${data.name}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,13,5]
[size=87]PHONE[/size]
${data.phone}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]SEX (M/F/O)[/size]
${data.sex} 
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]HAIR[/size]
${data.hair}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]EYES[/size]
${data.eyes}
[/tdwidth][/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,35,5]
[size=87]RESIDENCE[/size]
${data.residence}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]BIRTHDATE[/size]
${data.birthdate}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]DESCENT[/size]
${data.descent} 
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]HEIGHT[/size]
${data.height}
[/tdwidth][/tr]


[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]CLOTHING[/size]
${data.clothing}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]PERSONAL ODDITIES[/size]
${data.oddities}
[/tdwidth]
[/tr]


[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]MONIKER / ALIAS[/size]
${data.moniker}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]GANG / CLUB[/size]
${data.gang}
[/tdwidth]
[/tr]


[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=0,black,transparent,top,left,2,5]
[size=87][b]SUBJ
INFO[/b][/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,5,5]
[size=87]${data.loiterer ? `[cbc]` : `[cb]`}LOITERER
${data.prowler ? `[cbc]` : `[cb]`}PROWLER[/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,6,5]
[size=87]${data.homeless ? `[cbc]` : `[cb]`}HOMELESS
${data.witness ? `[cbc]` : `[cb]`}WITNESS[/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,7,5]
[size=87]${data.gangActivity ? `[cbc]` : `[cb]`}GANG ACTIVITY
${data.hasRecord ? `[cbc]` : `[cb]`}HAS RECORD[/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,8,5]
[size=87]${data.onParole ? `[cbc]` : `[cb]`}ON PAROLE
${data.onProbation ? `[cbc]` : `[cb]`}ON PROBATION[/size]

[/tdwidth]
[tdwidth=0,black,transparent,top,left,8,5]
[size=87]${data.driver ? `[cbc]` : `[cb]`}DRIVER
${data.passenger ? `[cbc]` : `[cb]`}PASSENGER
[/size]
[/tr]


[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]VEH. MAKE[/size]
${data.veh_make}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]VEH. MODEL[/size]
${data.veh_model}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]TYPE[/size]
${data.veh_type}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]COLOR[/size]
${data.veh_color}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]VEH. LIC. NO.[/size]
${data.veh_licNo}
[/tdwidth]
[/tr]


[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=0,black,transparent,top,left,2,5]
[size=87][b]VEH
INFO[/b][/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,8,5]
[size=87]${data.veh_bucketSeat ? `[cbc]` : `[cb]`}BUCKET SEAT
${data.veh_damagedInside ? `[cbc]` : `[cb]`}DAMAGED INSIDE[/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,8,5]
[size=87]${data.veh_customWheels ? `[cbc]` : `[cb]`}CUSTOM WHEELS
${data.veh_paintedMural ? `[cbc]` : `[cb]`}PAINTED MURAL[/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,8,5]
[size=87]${data.veh_levelAlter ? `[cbc]` : `[cb]`}LEVEL ALTER
${data.veh_rustPrimer ? `[cbc]` : `[cb]`}RUST / PRIMER[/size]

[/tdwidth]
[tdwidth=0,black,transparent,top,left,8,5]
[size=87]${data.veh_customPaint ? `[cbc]` : `[cb]`}CUSTOM PAINT
${data.veh_vinylTop ? `[cbc]` : `[cb]`}VINYL TOP[/size]

[/tdwidth]
[/tr]


[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=0,black,transparent,top,left,2,5]
[size=87][b]BODY[/b][/size]

[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,4,5]
[size=87]${data.veh_body_damage ? `[cbc]` : `[cb]`}DAMAGE
${data.veh_body_modified ? `[cbc]` : `[cb]`}MODIFIED[/size]
[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,3,5]
[size=87]${data.veh_body_sticker ? `[cbc]` : `[cb]`}STICKER
[/size]
[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,3,5]
[size=87]${data.veh_body_left ? `[cbc]` : `[cb]`}LEFT
${data.veh_body_right ? `[cbc]` : `[cb]`}RIGHT[/size]
[/tdwidth]
[tdwidth=0,black,transparent,top,left,3,5]
[size=87]${data.veh_body_front ? `[cbc]` : `[cb]`}FRONT
${data.veh_body_rear ? `[cbc]` : `[cb]`}REAR[/size]
[/tdwidth]
[tdwidth=0,black,transparent,top,left,2,5]
[size=87][b]WINDOW[/b][/size]
[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,4,5]
[size=87]${data.veh_windows_damage ? `[cbc]` : `[cb]`}DAMAGE
${data.veh_windows_tint ? `[cbc]` : `[cb]`}TINT[/size]
[/tdwidth]
[tdwidth=0,transparent,transparent,top,left,3,5]
[size=87]${data.veh_windows_left ? `[cbc]` : `[cb]`}LEFT
${data.veh_windows_right ? `[cbc]` : `[cb]`}RIGHT[/size]
[/tdwidth]
[tdwidth=0,black,transparent,top,left,3,5]
[size=87]${data.veh_windows_front ? `[cbc]` : `[cb]`}FRONT
${data.veh_windows_rear ? `[cbc]` : `[cb]`}REAR[/size]
[/tdwidth]
[/tr]
[/table2]


[font=Arial][center]LOS SANTOS POLICE DEPARTMENT
[size=120][color=black][b]FIELD INTERVIEW CARD (BACK)[/b][/font][/color][/size][/center]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87][b]PERSONS WITH SUBJECT[/b][/size]
[/tdwidth]
[/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]NAME (FIRST, MIDDLE, LAST)[/size]
${data.withSubject1_name}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,13,5]
[size=87]D.O.B[/size]
${data.withSubject1_dob}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]SEX (M/F/O)[/size]
${data.withSubject1_sex} 
[/tdwidth]

[tdwidth=1,black,transparent,top,left,15,5]
[size=87]GANG / MONIKER[/size]
${data.withSubject1_gang}
[/tdwidth]
[/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]NAME (FIRST, MIDDLE, LAST)[/size]
${data.withSubject2_name}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,13,5]
[size=87]D.O.B[/size]
${data.withSubject2_dob}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]SEX (M/F/O)[/size]
${data.withSubject2_sex} 
[/tdwidth]

[tdwidth=1,black,transparent,top,left,15,5]
[size=87]GANG / MONIKER[/size]
${data.withSubject2_gang}
[/tdwidth]
[/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,30,5]
[size=87]ADDITIONAL INFO / NARRATIVE / INFORMATION[/size]
${data.additionalInfo}
[/tdwidth]
[/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]DATE[/size]
${data.date}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]TIME[/size]
${data.time}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,16,5]
[size=87]LOCATION[/size]
${data.location}
[/tdwidth]
[/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,16,5]
[size=87]OFFICER[/size]
${data.officerA_name}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]SERIAL NO.[/size]
${data.officerA_serial}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,16,5]
[size=87]OFFICER[/size]
${data.officerB_name}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]SERIAL NO.[/size]
${data.officerB_serial}
[/tdwidth]
[/tr]
[/table2]
[table2=1,black,transparent,Arial]
[tr]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87][b]CALLSIGN[/b][/size]
${data.callsign}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,16,5]
[size=87][b]INCIDENT NO.[/b][/size]
${data.incidentNo}
[/tdwidth]
[tdwidth=1,black,transparent,top,left,8,5]
[size=87]DIVISION[/size]
${data.division}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]DETAIL[/size]
${data.detail}
[/tdwidth]

[tdwidth=1,black,transparent,top,left,8,5]
[size=87]SUPV. INIT..[/size]
${data.supvInit}
[/tdwidth]
[/tr]
[/table2]
`;
}

export default generateBbCode;