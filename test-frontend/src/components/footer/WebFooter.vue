<template>
  <footer class="footer">
       <div class="container">
        <hr>
           <div class="row">
           
               <div class="col-md-3 footer-content">
                <div to="/" class="navbar-footer">
                  <img src="../../assets/img/logo-alt.svg" alt="">
                  <div class="find-us">Find Us:</div>
                  <div class="sosmed">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                  </div>
                </div> 
               </div>

               <div class="kanan">
                <div class="col-md-3" style="width: 200px;">
                   <h5 style="color: #E77E23;">Navigation</h5>
                    <div class="navigation-footer">
                      <div class="footer-kanan">
                        <a href="#">Home</a>
                        <a href="#">Order</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                      </div>
                      <div class="footer-kiri">
                        <a href="#">Contact</a>
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                      </div>
                    </div>
               </div>
               
               <div class="col-md-3">
                   <h5 style="color: #E77E23;">Contact</h5>
                    <div class="contact-footer">
                      <i class="fa-regular fa-envelope" style="color: #E77E23; margin-right: 10px;"></i>
                      <a href="#">Food.now@mail.com</a>
                    </div>
                    <div class="contact-footer">
                      <i class="fa-solid fa-phone" style="color: #E77E23; margin-right: 10px;"></i>
                      <a href="#">+62848477102943</a>
                    </div>
                    <div class="contact-footer">
                      <i class="fa-brands fa-whatsapp" style="color: #E77E23; margin-right: 10px;"></i>
                      <a href="#">+628184938494</a>
                    </div>
               </div>
             
               <div class="col-md-3">
                   <h5 style="color: #E77E23;">Community</h5>
                   <div class="contact-footer" style="display: flex; justify-content: left; align-items:baseline;">
                    <div>
                      <i class="fas fa-map-marker" style="color: #E77E23; margin-right: 10px;"></i>
                    </div>
                    
                    <div>
                      <div><b>Kerobokan</b></div>
                      <a href="#">
                        Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
                      </a>
                    </div>
                   </div>
               </div>
               </div>
        
               
           </div>

           <!-- Footer Bottom -->
           <div class="footer-bottom" style="text-align: center;">
            <hr>
               <p>Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy Policy <br>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
           
           </div>
       </div>
   </footer>
</template>

<style scoped>
.row{
  display: flex;
  padding: 30px 0;
}
.kanan { 
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start; 
  width: 900px;
}
.find-us{
  color: #E77E23; 
  font-size: 20px; 
  font-weight: bold; 
  margin-top: 30px;
}
.sosmed{
  font-size: 20px;
  color: #E77E23;
}
.sosmed i{
  margin-top: 20px;
  margin-right: 20px;
  border: 1px solid #E77E23;
  padding: 15px;
  border-radius: 60px;
}
.sosmed i:hover{
  background-color: #E77E23;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}
.footer-bottom{
  color: rgb(173, 173, 173);
}
</style>