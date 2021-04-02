<%@ Page Title="" Language="C#" MasterPageFile="~/VermaTransport.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="VermaTransportCompany.index" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
    <style amp-custom>
        * {
            box-sizing: border-box
        }

        
        
        .apps_bannerBG {
            background-image: url(images/bg-img.jpg);
            background-size: cover;
            height: 700px;
            background-size: cover;
            padding: 40px 0
        }

        
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <section class="apps_banner   apps_bannerBG  apps_lightBg clearfix" id="apps_bannerCon">
          <h1 class="mainh">Online Truck Booking Made Easy</h1>
    <div class="apps_container">
        <div class="apps_row">
            <div class="apps_col12">
                <div class="apps_banner_content">

 
                        <!-- Header Booking -->
                 
                      <form class="apps_booking" action="../webbooking.php"    target="_top"  id="home_booking" on="submit-error:error-lightbox" custom-validation-reporting="show-all-on-submit">
                     
					 <ul class="apps_booking_form">  
                            <li role="button" tabindex="0" on="tap:lightbox-selectOrigin"><input type="text"  placeholder="Enter Pickup City" [value]="formDataVar.pickupArray  ? formDataVar.pickupArray.formatted_address == null ? '' : formDataVar.pickupArray.formatted_address : '' " value="" name="pickup_address"  autocomplete="off"   id="fromt" class="fromt" required /></li>
                            <li role="button" tabindex="0" on="tap:lightbox-selectDestination"><input type="text" placeholder="Enter Drop City" [value]="dropDataVar.dropArray  ? dropDataVar.dropArray.formatted_address == null  ? '' : dropDataVar.dropArray.formatted_address : '' " value=""  name="dropl_address"  autocomplete="off" id="destinationt" class="destinationt" required /></li>
							
                           <li role="button" tabindex="0" on="tap:lightbox-selectType"><input type="select"  placeholder="Select Truck Type" [value]="truckDataVar.truckArray  ? truckDataVar.truckArray.name == null  ? '' : truckDataVar.truckArray.name : '' " value=""  name="truck_type" id="truckt" class="truckt" required="true"  data-readonly /></li>
                   
 
                            <input type="hidden" name="pickup_id" [value]="formDataVar.pickupArray  ? formDataVar.pickupArray.id == null ? '' : formDataVar.pickupArray.id : '' " value="" />
                            <input type="hidden" name="drop_id" [value]="dropDataVar.dropArray  ? dropDataVar.dropArray.id == null ? '' : dropDataVar.dropArray.id :  '' " value="" />
                             <input type="hidden" name="from" [value]="formDataVar.pickupArray  ? formDataVar.pickupArray.formatted_address == null ? '' : formDataVar.pickupArray.formatted_address : '' " value="" />
                            <input type="hidden" name="to" [value]="dropDataVar.dropArray  ? dropDataVar.dropArray.formatted_address == null ? '' : dropDataVar.dropArray.formatted_address :  '' " value="" />
							
                            <input type="hidden" name="dropval" [value]="truckDataVar.truckArray  ? truckDataVar.truckArray.name == null ? '' : truckDataVar.truckArray.name :  '' " value="" />
                            <input type="hidden" name="t_type" value="full_truck"/>
                        </ul>
                        <button type="submit" class="apps_form_btn">Check Fare</button>


                    </form>
                        <amp-lightbox  id="lightbox-selectOrigin" layout="nodisplay" on="lightboxOpen: from.focus">
                            <div on="tap:lightbox-selectOrigin.close" role="button" tabindex="0" id="close">X</div>
                            <div class="selectplace-container__item header">Enter Pickup City Location</div>
                            <div class="input">
                                 <label>
                                    <input type="search" name="from" id="from" class="search-box" required="" pattern="[A-Za-z\s]+" on="input-debounced: AMP.setState({
                                    formDataVar:{
                                        pickupQuery: event.value,
                                        showOrDropdown: event.value
                                    }
                                    }),
                                    autosuggest-orlist.show;
                                    tap: AMP.setState({
                                    formDataVar:{
                                        pickupQuery: formDataVar.pickupQuery==null ? '' : formDataVar.pickupQuery,
                                        showOrDropdown: 'true'
                                    }
                                    }),
                                    autosuggest-orlist.show"  placeholder="Enter Pickup City" autocomplete="off" autofocus="" minlength="2" /> </label>
                                <div class="suggest">
                                    <amp-list  class="list-overflow autosuggest-box" layout="fixed-height" height="350" src="https://truckguru.co.in/get_from_data.php?q=" [src]="formDataVar.endpoint + (formDataVar.pickupQuery ? formDataVar.pickupQuery : '')" id="autosuggest-orlist" single-item="" items="." overflow="">
         
                                        <template type="amp-mustache">
                                         
                                                <amp-selector id="autosuggest-selector" keyboard-select-mode="focus" layout="container" on="select: AMP.setState({formDataVar:{pickupArray: formDataVar.pickArea.filter(x=>x.id == event.targetOption)[0], showOrDropdown: false}}), autosuggest-orlist.hide">

                                                    {{#pickArea}}
                                                    <div class="select-option no-outline" role="option" tabindex="0" on="tap:lightbox-selectOrigin.close" option="{{id}}">

{{formatted_address}}</div>{{/pickArea}}{{^pickArea}}
                                                    <div class="select-option{{#pickupQuery}}empty{{/pickupQuery}}">{{#pickupQuery}}No results{{/pickupQuery}}</div>{{/pickArea}}

                                                </amp-selector>
                                            
                                        </template>
                                    </amp-list>
                                </div>

                            </div>
                        </amp-lightbox>

                        <amp-lightbox  id="lightbox-selectDestination" layout="nodisplay" on="lightboxOpen: to.focus">
                            <div on="tap:lightbox-selectDestination.close" role="button" tabindex="0" id="close">X</div>
                            <div class="selectplace-container__item header">Enter Drop City Location</div>
                            <div class="input">
                                <label>
                                    <input type="search" name="to" id="to" class="search-box" required="" pattern="[A-Za-z\s]+" on="input-debounced: AMP.setState({
                                    dropDataVar:{
                                        dropQuery: event.value,
                                        showOrDropdown: event.value
                                    }
                                    }),
                                    autosuggest-deslist.show;
                                    tap: AMP.setState({
                                    dropDataVar:{
                                        dropQuery: dropDataVar.dropQuery==null ? '' : dropDataVar.dropQuery,
                                        showOrDropdown: 'true'
                                    }
                                    }),
                                    autosuggest-deslist.show"  placeholder="Enter Drop City" autocomplete="off" autofocus="" minlength="2" /> </label>
									
                                <div class="suggest">
                                    <amp-list class="list-overflow  autosuggest-box" layout="fixed-height" height="350" src="https://truckguru.co.in/get_to_data.php?q=" [src]="dropDataVar.endpoint + (dropDataVar.dropQuery ? dropDataVar.dropQuery : '')" id="autosuggest-deslist" single-item="" items="." overflow="">
                                        <template type="amp-mustache">
                                            
                                                <amp-selector id="autosuggest-selector" keyboard-select-mode="focus" layout="container" on="select: AMP.setState({dropDataVar:{dropArray: dropDataVar.dropArea.filter(x=>x.id == event.targetOption)[0], showOrDropdown: false}}), autosuggest-deslist.hide">{{#dropArea}}
                                                    <div class="select-option no-outline" role="option" tabindex="0" on="tap:lightbox-selectDestination.close" option="{{id}}">{{formatted_address}}</div>{{/dropArea}}{{^dropArea}}
                                                    <div class="select-option{{#dropQuery}}empty{{/dropQuery}}">{{#dropQuery}}No results{{/dropQuery}}</div>{{/dropArea}}</amp-selector>
                                            
                                        </template>
                                    </amp-list>
                                </div>

                             </div>
                         </amp-lightbox>
						  <amp-lightbox scrollable="true" id="lightbox-selectType" layout="nodisplay" on="lightboxOpen: to.focus">  						   
                            <div on="tap:lightbox-selectType.close" role="button" tabindex="0" id="close">X</div>
                            <div class="selectplace-container__item header">Select Truck Type</div>
                            <div class="input">
                                
                                <div class="suggest">
                                    <amp-list class="list-overflow autosuggest-box"  layout="fixed-height"  height="750" src="https://truckguru.co.in/get_truck_data.php?q=" [src]="truckDataVar.endpoint + (truckDataVar.truckQuery ? truckDataVar.truckQuery : '')" id="autosuggest-deslist" single-item="" items="." overflow="">
                                        <template type="amp-mustache">
                                            
                                                <amp-selector  id="autosuggest-selector" layout="container" on="select: AMP.setState({truckDataVar:{truckArray: truckDataVar.truckArea.filter(x=>x.id == event.targetOption)[0], showOrDropdown: false}}), autosuggest-deslist.hide">{{#truckArea}}
                                                    <div class="row trucktype" on="tap:lightbox-selectType.close" role="option" tabindex="0"  option="{{id}}">
                                                        <amp-img src="../../uploads/{{image}}" width="48" height="38"  class="truckimage col-md-2"  ></amp-img>
                                                        <div class="select-option no-outline truckoption col-md-10"   >{{name}}</div>
                                                     
                                                    </div>
                                                  
                                                    
                                                    

                                                    {{/truckArea}}{{^truckArea}}
                                                    <div class="select-option{{#truckQuery}}empty{{/truckQuery}}">{{#truckQuery}}No results{{/truckQuery}}</div>{{/truckArea}}
                                                </amp-selector>
                                            
                                        </template>
                                    </amp-list>
                                </div>

                            </div>
                        </amp-lightbox>
                      
                      
                </div><!-- end of apps-banner-content -->
            </div><!-- end of apps_col12 -->
        </div><!-- end of apps_row -->
    </div><!-- end of apps_container -->
</section>  

    <section  class="pad30-0">
        <div class="container ">
          <p class="turkguru-p center">
            <strong>TruckGuru – India’s most reliable, dedicated and expert online Transport  logistics services partner!</strong>
          </p>
          <div class="margB32">
            <p class="turkguru-p1">  TruckGuru is one of the foremost trucking companies, delivering the plethora of 
              <a href="transportation-services.php">transport services</a> to its esteemed consumers across
      India. We are the “best-in-class and cost-effective transporter” as defined by our customers and serving this industry for many years.
    
            </p>
            <p class="turkguru-p1">
  We have set high standards in every facet of transportation, and strive to keep raising the bar. With our extensive industry knowledge 
  and skilled team, you can completely focus on your core interests whereas leaving the tiring and complex moving process on us.
              <br>Time-critical? No worries – TruckGuru will help you!

              </p>
              <p class="turkguru-p1">
                <a href="https://truckguru.co.in/about">Our company</a> is equipped with advanced equipment, modern tools, and expertise that enable us to help our consumers with crucial 
  transportation and supply chain solutions. We ensure businesses that they will get excellent-quality, prompt, and secure 
  transportation services irrespective of time-constraint, the heavy load issue, and any other related problem.
  
              </p>
              <p class="turkguru-p1">
  Being the prime logistics services provider, we believe that people, technology, infrastructure and expertise all work together 
  to help businesses to succeed and henceforth, we are offering the right blend of all these.
  </p>
              <p  class="turkguru-p1  ">
  We are a customer-centric firm and our every action is aimed to offer ease and comfort to them when it comes to booking a truck. 
  Our online truck booking app has tremendously simplified the process of booking a truck. Whether you are looking for the companies 
  of 
                <a href="https://truckguru.co.in/hyderabad">online truck booking Hyderabad</a> or online truck booking Mumbai, TruckGuru would always be your right choice.
  
              </p>
            </div>
            <amp-accordion disable-session-states expand-single-section>
              <section>
                <h2 class="acco">
        Who We Are?
         
                  <span class="plus">+</span>
                </h2>
                <div class="box-shadow shadow">
                  <p class="panel"> TruckGuru is a premier provider of transport services across the country and helping our patrons to transport any freight, 
      any size, anywhere in India. We cover a vast gamut of transportation solutions to present our clients with customized options to 
      meet their needs. Our online truck booking app has been proved the blessing to our customers when they book truck online Delhi or do 
      online truck booking Chennai. Our team works closely with our consumers to look at their whole supply chains, from point of origin to
      the end-consumer, to find the new opportunities.</p>
                </div>
              </section>
              <section>
                <h2  class="acco"> What We Do?
        
                  <span class="plus">+</span>
                </h2>
                <div class="shadow">
                  <p  class="panel marg0 padB10"> Our company is majorly engaged in two segments - Logistics and Transportation. We have crafted a complete suite of Logistics 
        and Transportation solutions that incorporates -
       </p>
                  <ul class="panel-ul padT0 pt0">
                    <li>Transportation Management System</li>
                    <li>Warehouse Management System</li>
                    <li>Fleet Management</li>
                    <li>Freight Management</li>
                  </ul>
                </div>
              </section>
              <section >
                <h2 class="acco">Why Choose Us?
       
                  <span class="plus">+</span>
                </h2>
                <div class="shadow">
                  <ul class="panel-ul">
                    <li>24/7 services</li>
                    <li>Security certified drivers</li>
                    <li>SMS/Email alerts</li>
                    <li>Estimated delivery time</li>
                    <li>Over 5000 vehicles</li>
                    <li>100% customer satisfaction</li>
                  </ul>
                </div>
              </section>
              <section >
                <h2 class="acco">We Are Best From Others?
       
                  <span class="plus">+</span>
                </h2>
                <div class="shadow">
                  <ul class="panel-ul">
                    <li>We make it faster.</li>
                    <li>We adopt a systematic and collaborative approach.</li>
                    <li>Save you on money by reducing operational expenses.</li>
                    <li> Safe, quick and on-time delivery.</li>
                  </ul>
                  <p class="turkguru-p1 pt0"> Above all, we’ve hired top-shelf talent – experienced operators and officials who know how to serve our clients to reduce costs 
  and improve their productivity. We immediately respond to our customers’ needs who use our feature-rich and user-friendly truck booking
  app for better transportation and 
                    <a href="https://truckguru.co.in/logistics-service">logistics services</a>.
                  </p>
                </div>
                  </section>
                </amp-accordion>
            </div>
              </section>

    <section  class="pad30-0 bg-gray wd100">
        <div class="container">
          <div class="row">
            <div class="col5 col-auto pad0 t-w50">
              <h3 class="section-head marg0 center">
                <span class="frist"></span>
              Our Advantages
                <span class="second"></span>
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col4 t-w100 tv100">
              <div class="row d-flex">
                <div class="col4 marg-auto">
                  <amp-img class="img-resp2" src="/amp/images/manipulator-truck-128.png" alt="" width="100" height="100" layout="responsive" >
                
                  </amp-img>
                </div>
                <div class="col8">
                  <h3 class="Full-Load">Full Load Services</h3>
                  <p>We provide Full Truck load transportation services with varied type of trucks available with the click of a button.</p>
                </div>
              </div>
              <div class="row d-flex">
                <div class="col4 marg-auto">
                  <amp-img class="img-resp2" src="/amp/images/transparent-pricing.png" alt="" width="125" height="130" layout="responsive" >
               
                  </amp-img>
                </div>
                <div class="col8">
                  <h3 class="Full-Load">Transparent Pricing</h3>
                  <p>With our fare calculator, we instantaneously give you best possible rates online.</p>
                </div>
              </div>
              <div class="row d-flex">
                <div class="col4 marg-auto">
                  <amp-img class="img-resp2" src="/amp/images/employee.png" alt="" width="100" height="100" layout="responsive" >
                 
                  </amp-img>
                </div>
                <div class="col8">
                  <h3 class="Full-Load">Quick & Easy Portal</h3>
                  <p class="marb0">Hiring a truck is now just a click away, through our hassle free online booking system.</p>
                </div>
              </div>
            </div>
            <div class="col4 t-w50 none dnone" style="padding: 25px 5.5%;">
              <amp-img class="img-resp2" src="/amp/images/mobile.png" alt="" width="244" height="485" layout="responsive">
            
              </amp-img>
            </div>
            <div class="col4 t-w50 pad0 tv100">
              <div class="row reverse-column padb0">
                <div class="col8 ">
                  <h3 class="Full-Load">Advance Booking</h3>
                  <p class="marb0">Our vehicle availability is guaranteed on daily/weekly/monthly basis to ensure on-time reporting.</p>
                </div>
                <div class="col4 marg-auto">
                  <amp-img class="img-resp2" src="/amp/images/advance-booking.png" alt="" width="150" height="160" layout="responsive" >
                 
                  </amp-img>
                </div>
              </div>
              <div class="row reverse-column w-100 padb0 padT0">
                <div class="col8">
                  <h3 class="Full-Load">Live Tracking</h3>
                  <p class="marb0">Get real time updates of your goods with our simplified technology.</p>
                </div>
                <div class="col4 marg-auto">
                  <amp-img class="img-resp2" src="/amp/images/route.png" alt="" width="125" height="130" layout="responsive" >
                  
                  </amp-img>
                </div>
              </div>
              <div class="row reverse-column padT0">
                <div class="col8">
                  <h3 class="Full-Load">24/7 Service</h3>
                  <p>TruckGuru is dedicated to provide exceptional customer support over the Phone & Live Chat.</p>
                </div>
                <div class="col4 marg-auto">
                  <amp-img class="img-resp2" src="/amp/images/24-service.png" alt="" width="120" height="120" layout="responsive" >
                   
                  </amp-img>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section class="pad30-0">
        <div class="row">
            <div class="col9 col-auto center w-90">
                <div class="row">
                    <div class="col5 col-auto pad0">
                        <h3 class="section-head marg0">
                            <span class="frist"></span>
                                How it Works ?
          
            <span class="second"></span>
          </h3>
        </div>
      </div>
      <div class="row ">
        <div class="col4">
          <div class="features-icon">
            <amp-img src="/amp/images/person.png" alt="" width="70" height="70" layout="fixed" >
         
            </amp-img>
          </div>
          <div class="features-info">
            <h4>Book Your Truck  
              <br> 
               Through Website/App/Call center
              </h4>
            </div>
          </div>
          <div class="col4">
            <div class="features-icon">
              <amp-img src="/amp/images/turck.png" alt="" width="70" height="70" layout="fixed" >
               
              </amp-img>
            </div>
            <div class="features-info">
              <h4>Our System Finds  
                <br> Nearest Truck For You
                </h4>
              </div>
            </div>
            <div class="col4">
              <div class="features-icon">
                <amp-img src="/amp/images/mail.png" alt="" width="70" height="70" layout="fixed" >
                
                </amp-img>
              </div>
              <div class="features-info">
                <h4>Get updates and notifications
                  <br>via SMS &amp; Email
            
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>		  
		 		  
    </section>

    <section class="pad30-0">
          <div class="container">
            <div class="row">
              <div class="col4 col-auto pad0 t-w50">
                <h3 class="section-head marg0 center">
                  <span class="frist"></span>
          Testimonials
          
                  <span class="second"></span>
                </h3>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col11 col-auto center pad0">
              <div class="row t-flex">
                <div class="col6 test-pad t-flex">
                  <div class="test-div">
                    <p class="test-p">Thanks to TruckGuru, booking a truck for moving our goods across cities has become completely hassle free. With their online booking system, getting a truck on demand has become a smooth procedure, and you also get access to the rates instantly. We highly recommend them for their efficient and trustworthy customer service.</p>
                    <div>
                      <amp-img src="/amp/images/korndrop-oil.png" alt="" width="180" height="78" layout="fixed">
                     
                      </amp-img>
                    </div>
                  </div>
                </div>
                <div class="col6 test-pad ">
                  <div class="test-div">
                    <p class="test-p">Great team, prompt, responsive & well organized. TruckGuru has done an excellent job of transporting all our goods to a Pan India location in a safe & timely manner. The Team has completely pulled together to make our moving experience smooth & hassle free. We have been most impressed by their online truck booking facility, real-time updates, response & communication received look forward to working with you again.</p>
                    <div>
                      <amp-img src="/amp/images/tritorc.png" alt="" width="150" height="38" layout="fixed">
                    
                      </amp-img>
                    </div>
                  </div>
                </div>
               </div>
            </div>
        </div>
    </section>

    <section class="pad30-0 fs">
           
 
        <div class="container">
           <div class="row center d-flex"> 
             <div class="col2 marg-auto col50">
              <amp-img src="/amp/images/sula_vineyards.png" alt="" width="94" height="95" layout="fixed">
               
              </amp-img>
             </div>
             <div class="col2 marg-auto col50">
               <amp-img src="/amp/images/korndrop-oil.png" alt="" width="150" height="65" layout="fixed">
                
              </amp-img>
             </div>
             <div class="col2 marg-auto col50">
               <amp-img src="/amp/images/hyundaielectronics.png" alt="" width="150" height="29" layout="fixed">
                 
              </amp-img>
             </div>
             <div class="col2 marg-auto col50">
               <amp-img src="/amp/images/tiki-tar-industry.png" alt="" width="150" height="97" layout="fixed">
                
              </amp-img>
             </div>
            </div> 
        </div> 
        
     </section>


    
</asp:Content>
