function skillsMembers()
{
    var skills = document.getElementById("skills").value;
    var members = document.getElementById("members").value;
    var skillsArray = skills.split(",");
    var membersArray = members.split(",");
    var skillsMembers = ["John","Sam"];
    for(var i = 0; i < skillsArray.length; i++)
    {
        for(var j = 0; j < membersArray.length; j++)
        {
            if(skillsArray[i] == membersArray[j])
            {
                skillsMembers.push(membersArray[j]);
            }
        }
    }
    document.getElementById("skillsMembers").innerHTML = skillsMembers;
}    

