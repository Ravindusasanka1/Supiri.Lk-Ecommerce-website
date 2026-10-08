const ADMIN_AUTH_KEY = 'supiriAdminLoggedIn';
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';
const ADMIN_ROLE = 'admin';

function isAdminLoggedIn(){ return localStorage.getItem(ADMIN_AUTH_KEY)==='true' && localStorage.getItem('supiriUserRole')==='admin'; }
function requireAdmin(){
  if(!isAdminLoggedIn()) window.location.href='admin-login.html';
}
function adminLogin(e){
  e.preventDefault();
  const user=document.getElementById('adminUsername').value.trim();
  const pass=document.getElementById('adminPassword').value;
  const error=document.getElementById('loginError');
  if(user===ADMIN_USER && pass===ADMIN_PASS){
    localStorage.setItem(ADMIN_AUTH_KEY,'true');
    localStorage.setItem('supiriUserRole', ADMIN_ROLE);
    window.location.href='admin.html';
  }else{
    error.textContent='Invalid username or password.';
    error.classList.remove('d-none');
  }
}
function adminLogout(){
  localStorage.removeItem(ADMIN_AUTH_KEY);
  localStorage.removeItem('supiriUserRole');
  window.location.href='admin-login.html';
}
