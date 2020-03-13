handleSubmit = e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      country,
      gender,
      bio,
      file,
      skills
    } = this.state

   
    const data = {
      firstName,
      lastName,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills
    }
    console.log(data)
  }