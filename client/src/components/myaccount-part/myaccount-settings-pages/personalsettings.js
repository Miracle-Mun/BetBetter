import React, { Component } from 'react';


class PersonalSettings extends Component {
  render() {
    return (
        <div>
        <h4 className="change-password-title">
            Personal Settings
        </h4>
        <div className="row">
            <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                <hr className="password-form-hr" />
            </div>
        </div>
        <form className="editUserPersonal row" id="edit_user"
              action="https://www.betburger.com/profile/personal_settings" acceptCharset="UTF-8"
              data-remote="true" method="post"><input name="utf8" type="hidden" value="✓" /><input
                type="hidden" name="_method" value="put" />
            <div className="info-holder form-group col-sm-6 col-md-12 required">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label htmlFor="user_full_name">Full Name</label>
                        <span className="small">enter your surname and first name</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <input className="form-control" value="Alex K" type="text"
                               name="user[full_name]" id="user_full_name" />
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group col-sm-6 col-md-12 required">
                <div className="row">
                    <div className="col-md-5 col-xs-12 with-desc">
                        <label htmlFor="user_country_id">Country</label>
                        <span className="small">choose your country of permanent residence</span>
                    </div>
                    <div className="col-md-5 col-xs-12 setting_input">
                        <select className="form-control" disabled="disabled" value="28"
                                name="user[country_id]" id="user_country_id">
                            <option data-eur="false" value="123">Afghanistan</option>
                            <option data-eur="false" value="74">Albania</option>
                            <option data-eur="false" value="92">Algeria</option>
                            <option data-eur="false" value="124">American Samoa</option>
                            <option data-eur="false" value="116">Andorra</option>
                            <option data-eur="false" value="125">Angola</option>
                            <option data-eur="false" value="205">Anguilla</option>
                            <option data-eur="false" value="126">Antigua and Barbuda</option>
                            <option data-eur="false" value="30">Argentina</option>
                            <option data-eur="false" value="31">Armenia</option>
                            <option data-eur="false" value="127">Aruba</option>
                            <option data-eur="false" value="33">Australia</option>
                            <option data-eur="true" value="24">Austria</option>
                            <option data-eur="false" value="34">Azerbaijan</option>
                            <option data-eur="false" value="128">Bahamas</option>
                            <option data-eur="false" value="98">Bahrain</option>
                            <option data-eur="false" value="118">Bangladesh</option>
                            <option data-eur="false" value="129">Barbados</option>
                            <option data-eur="false" value="35">Belarus</option>
                            <option data-eur="true" value="21">Belgium</option>
                            <option data-eur="false" value="130">Belize</option>
                            <option data-eur="false" value="131">Benin</option>
                            <option data-eur="false" value="132">Bermuda</option>
                            <option data-eur="false" value="133">Bhutan</option>
                            <option data-eur="false" value="36">Bolivia</option>
                            <option data-eur="false" value="75">Bosnia-Herzegovina</option>
                            <option data-eur="false" value="134">Botswana</option>
                            <option data-eur="false" value="3">Brazil</option>
                            <option data-eur="false" value="135">British Virgin Islands</option>
                            <option data-eur="false" value="206">Brunei Darussalam</option>
                            <option data-eur="true" value="37">Bulgaria</option>
                            <option data-eur="false" value="136">Burkina Faso</option>
                            <option data-eur="false" value="137">Burundi</option>
                            <option data-eur="false" value="138">Cambodia</option>
                            <option data-eur="false" value="38">Cameroon</option>
                            <option data-eur="false" value="39">Canada</option>
                            <option data-eur="false" value="139">Cape Verde Islands</option>
                            <option data-eur="false" value="140">Cayman Islands</option>
                            <option data-eur="false" value="207">Central African Republic</option>
                            <option data-eur="false" value="208">Chad</option>
                            <option data-eur="false" value="40">Chile</option>
                            <option data-eur="false" value="41">China PR</option>
                            <option data-eur="false" value="141">Chinese Taipei</option>
                            <option data-eur="false" value="42">Colombia</option>
                            <option data-eur="false" value="209">Comoros</option>
                            <option data-eur="false" value="143">Congo</option>
                            <option data-eur="false" value="142">Congo DR</option>
                            <option data-eur="false" value="144">Cook Islands</option>
                            <option data-eur="false" value="43">Costa Rica</option>
                            <option data-eur="true" value="44">Croatia</option>
                            <option data-eur="false" value="120">Cuba</option>
                            <option data-eur="false" value="145">Curaçao</option>
                            <option data-eur="true" value="26">Cyprus</option>
                            <option data-eur="true" value="45">Czech Republic</option>
                            <option data-eur="false" value="146">Côte d'Ivoire</option>
                            <option data-eur="true" value="4">Denmark</option>
                            <option data-eur="false" value="147">Djibouti</option>
                            <option data-eur="false" value="210">Dominica</option>
                            <option data-eur="false" value="119">Dominican Republic</option>
                            <option data-eur="false" value="46">Ecuador</option>
                            <option data-eur="false" value="99">Egypt</option>
                            <option data-eur="false" value="47">El Salvador</option>
                            <option data-eur="false" value="5">England</option>
                            <option data-eur="false" value="211">Equatorial Guinea</option>
                            <option data-eur="false" value="212">Eritrea</option>
                            <option data-eur="true" value="48">Estonia</option>
                            <option data-eur="false" value="148">Ethiopia</option>
                            <option data-eur="false" value="94">Faroe Islands</option>
                            <option data-eur="false" value="149">Fiji</option>
                            <option data-eur="true" value="22">Finland</option>
                            <option data-eur="true" value="10">France</option>
                            <option data-eur="false" value="150">French Guiana</option>
                            <option data-eur="false" value="151">Gabon</option>
                            <option data-eur="false" value="152">Gambia</option>
                            <option data-eur="false" value="95">Georgia</option>
                            <option data-eur="true" value="6">Germany</option>
                            <option data-eur="false" value="113">Ghana</option>
                            <option data-eur="false" value="213">Gibraltar</option>
                            <option data-eur="true" value="109">Great Britain</option>
                            <option data-eur="true" value="25">Greece</option>
                            <option data-eur="false" value="153">Grenada</option>
                            <option data-eur="false" value="154">Guadeloupe</option>
                            <option data-eur="false" value="155">Guam</option>
                            <option data-eur="false" value="50">Guatemala</option>
                            <option data-eur="false" value="215">Guinea</option>
                            <option data-eur="false" value="214">Guinea-Bissau</option>
                            <option data-eur="false" value="156">Guyana</option>
                            <option data-eur="false" value="157">Haiti</option>
                            <option data-eur="false" value="51">Honduras</option>
                            <option data-eur="false" value="90">Hong Kong</option>
                            <option data-eur="true" value="52">Hungary</option>
                            <option data-eur="false" value="12">Iceland</option>
                            <option data-eur="false" value="108">India</option>
                            <option data-eur="false" value="104">Indonesia</option>
                            <option data-eur="false" value="53">Iran</option>
                            <option data-eur="false" value="105">Iraq</option>
                            <option data-eur="true" value="78">Ireland Republic</option>
                            <option data-eur="false" value="54">Israel</option>
                            <option data-eur="true" value="2">Italy</option>
                            <option data-eur="false" value="110">Jamaica</option>
                            <option data-eur="false" value="19">Japan</option>
                            <option data-eur="false" value="93">Jordan</option>
                            <option data-eur="false" value="55">Kazakhstan</option>
                            <option data-eur="false" value="158">Kenya</option>
                            <option data-eur="false" value="216">Kiribati</option>
                            <option data-eur="false" value="217">Korea DPR</option>
                            <option data-eur="false" value="159">Korea Republic</option>
                            <option data-eur="false" value="84">Kuwait</option>
                            <option data-eur="false" value="160">Kyrgyzstan</option>
                            <option data-eur="true" value="56">Latvia</option>
                            <option data-eur="false" value="117">Lebanon</option>
                            <option data-eur="false" value="161">Lesotho</option>
                            <option data-eur="false" value="219">Liberia</option>
                            <option data-eur="false" value="162">Libya</option>
                            <option data-eur="false" value="220">Liechtenstein</option>
                            <option data-eur="true" value="13">Lithuania</option>
                            <option data-eur="true" value="57">Luxembourg</option>
                            <option data-eur="false" value="122">Macao</option>
                            <option data-eur="false" value="49">Macedonia FYR</option>
                            <option data-eur="false" value="163">Madagascar</option>
                            <option data-eur="false" value="164">Malawi</option>
                            <option data-eur="false" value="86">Malaysia</option>
                            <option data-eur="false" value="165">Maldives</option>
                            <option data-eur="false" value="166">Mali</option>
                            <option data-eur="true" value="58">Malta</option>
                            <option data-eur="false" value="167">Martinique</option>
                            <option data-eur="false" value="168">Mauritania</option>
                            <option data-eur="false" value="169">Mauritius</option>
                            <option data-eur="false" value="221">Mayotte</option>
                            <option data-eur="false" value="59">Mexico</option>
                            <option data-eur="false" value="23">Moldova</option>
                            <option data-eur="false" value="236">Monaco</option>
                            <option data-eur="false" value="170">Mongolia</option>
                            <option data-eur="false" value="88">Montenegro</option>
                            <option data-eur="false" value="222">Montserrat</option>
                            <option data-eur="false" value="96">Morocco</option>
                            <option data-eur="false" value="171">Mozambique</option>
                            <option data-eur="false" value="172">Myanmar</option>
                            <option data-eur="false" value="173">Namibia</option>
                            <option data-eur="false" value="174">Nepal</option>
                            <option data-eur="true" value="15">Netherlands</option>
                            <option data-eur="false" value="237">Netherlands Antilles</option>
                            <option data-eur="false" value="175">New Caledonia</option>
                            <option data-eur="false" value="114">New Zealand</option>
                            <option data-eur="false" value="176">Nicaragua</option>
                            <option data-eur="false" value="177">Niger</option>
                            <option data-eur="false" value="178">Nigeria</option>
                            <option data-eur="false" value="223">Northern Mariana Islands</option>
                            <option data-eur="false" value="60">Norway</option>
                            <option data-eur="false" value="106">Oman</option>
                            <option data-eur="false" value="102">Pakistan</option>
                            <option data-eur="false" value="179">Palestine</option>
                            <option data-eur="false" value="101">Panama</option>
                            <option data-eur="false" value="180">Papua New Guinea</option>
                            <option data-eur="false" value="61">Paraguay</option>
                            <option data-eur="false" value="62">Peru</option>
                            <option data-eur="false" value="112">Philippines</option>
                            <option data-eur="true" value="63">Poland</option>
                            <option data-eur="true" value="27">Portugal</option>
                            <option data-eur="false" value="181">Puerto Rico</option>
                            <option data-eur="false" value="97">Qatar</option>
                            <option data-eur="true" value="65">Romania</option>
                            <option data-eur="false" selected="selected" value="28">Russia</option>
                            <option data-eur="false" value="183">Rwanda</option>
                            <option data-eur="false" value="225">Samoa</option>
                            <option data-eur="false" value="115">San Marino</option>
                            <option data-eur="false" value="193">Sao Tome and Principe</option>
                            <option data-eur="false" value="87">Saudi Arabia</option>
                            <option data-eur="false" value="14">Scotland</option>
                            <option data-eur="false" value="184">Senegal</option>
                            <option data-eur="false" value="66">Serbia</option>
                            <option data-eur="false" value="185">Seychelles</option>
                            <option data-eur="false" value="186">Sierra Leone</option>
                            <option data-eur="false" value="89">Singapore</option>
                            <option data-eur="false" value="227">Sint Maarten</option>
                            <option data-eur="true" value="16">Slovakia</option>
                            <option data-eur="true" value="67">Slovenia</option>
                            <option data-eur="false" value="187">Solomon Islands</option>
                            <option data-eur="false" value="228">Somalia</option>
                            <option data-eur="false" value="68">South Africa</option>
                            <option data-eur="false" value="229">South Sudan</option>
                            <option data-eur="true" value="7">Spain</option>
                            <option data-eur="false" value="188">Sri Lanka</option>
                            <option data-eur="false" value="189">St. Kitts and Nevis</option>
                            <option data-eur="false" value="230">St. Lucia</option>
                            <option data-eur="false" value="231">St. Vincent and the Grenadines
                            </option>
                            <option data-eur="false" value="111">Sudan</option>
                            <option data-eur="false" value="190">Suriname</option>
                            <option data-eur="false" value="191">Swaziland</option>
                            <option data-eur="true" value="17">Sweden</option>
                            <option data-eur="false" value="8">Switzerland</option>
                            <option data-eur="false" value="192">Syria</option>
                            <option data-eur="false" value="238">Taiwan</option>
                            <option data-eur="false" value="103">Tajikistan</option>
                            <option data-eur="false" value="195">Tanzania</option>
                            <option data-eur="false" value="69">Thailand</option>
                            <option data-eur="false" value="232">Timor-Leste</option>
                            <option data-eur="false" value="196">Togo</option>
                            <option data-eur="false" value="233">Tonga</option>
                            <option data-eur="false" value="197">Trinidad and Tobago</option>
                            <option data-eur="false" value="91">Tunisia</option>
                            <option data-eur="false" value="70">Turkey</option>
                            <option data-eur="false" value="198">Turkmenistan</option>
                            <option data-eur="false" value="199">Turks and Caicos Islands</option>
                            <option data-eur="false" value="200">Tuvalu</option>
                            <option data-eur="false" value="83">UAE</option>
                            <option data-eur="false" value="234">US Virgin Islands</option>
                            <option data-eur="false" value="18">USA</option>
                            <option data-eur="false" value="201">Uganda</option>
                            <option data-eur="false" value="71">Ukraine</option>
                            <option data-eur="false" value="82">Uruguay</option>
                            <option data-eur="false" value="85">Uzbekistan</option>
                            <option data-eur="false" value="202">Vanuatu</option>
                            <option data-eur="false" value="72">Venezuela</option>
                            <option data-eur="false" value="73">Vietnam</option>
                            <option data-eur="false" value="9">Wales</option>
                            <option data-eur="false" value="81">Yemen</option>
                            <option data-eur="false" value="203">Zambia</option>
                            <option data-eur="false" value="235">Zanzibar</option>
                            <option data-eur="false" value="204">Zimbabwe</option>
                        </select>
                        <span className="help-block hidden"></span>
                    </div>
                </div>
            </div>
            <div className="info-holder form-group conform col-xs-12">
                <div className="row">
                    <div className="col-md-10 col-xs-12 text-right">
                        <a className="btn blue" name="commit" href="/signin">Update</a>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
  }
}

export default PersonalSettings;
