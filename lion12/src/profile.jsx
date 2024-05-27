function Profile(Props) {
    const divStyle = {
        backgroundColor: "coral"
    }
    return (
        <div style={divStyle}>
        <p>이름: {Props.name}</p>
        <p>소개: {Props.introduction}</p>
        <p>조회수: {Props.viewCount}</p>
        </div>
    );
}
export default Profile