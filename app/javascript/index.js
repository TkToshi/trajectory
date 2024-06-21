window.addEventListener('turbo:load', function(){

  const ProfileButton = document.getElementById("index_profile")

  ProfileButton.addEventListener('mouseover', function(){
    ProfileButton.setAttribute("style", "background-color:#FFBEDA;")
  })

  ProfileButton.addEventListener('mouseout', function(){
    ProfileButton.removeAttribute("style")
  })

  const NewPostButton = document.getElementById("index_new_post")

  NewPostButton.addEventListener('mouseover', function(){
    NewPostButton.setAttribute("style", "background-color:#FFBEDA;")
  })

  NewPostButton.addEventListener('mouseout', function(){
    NewPostButton.removeAttribute("style")
  })

  const AccountButton = document.getElementById("index_account")

  AccountButton.addEventListener('mouseover', function(){
    AccountButton.setAttribute("style", "background-color:#FFBEDA;")
  })

  AccountButton.addEventListener('mouseout', function(){
    AccountButton.removeAttribute("style")
  })

  const LogoutButton = document.getElementById("index_logout")

  LogoutButton.addEventListener('mouseover', function(){
    LogoutButton.setAttribute("style", "background-color:#FFBEDA;")
  })

  LogoutButton.addEventListener('mouseout', function(){
    LogoutButton.removeAttribute("style")
  })

})