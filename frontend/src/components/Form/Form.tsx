import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import { getCountries, getStates, getCities } from '../api/location';
import style from './Form.module.scss';
type Inputs = {
  name: string;
  gender: string;
  date: string;
  hrs: number;
  min: number;
  sec: number;
  country: string;
  state: string;
  city: string;
};

interface Country {
  name: string;
  code: string;
}

interface CountryMain {
  name: { official: string };
}

const Form = () => {
  const [countrySuggestion, setCountrySuggestion] = useState<string[]>([]);
  const [stateSuggestion, setStateSuggestion] = useState<string[]>([]);
  const [citySuggestion, setCitySuggestion] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    // getValues,
    formState: { errors },
  } = useForm<Inputs>();

  //react-query
  // useEffect(() => {}, []);

  // console.log(data);

  const onSubmit: SubmitHandler<Inputs> = (datas) => console.log(datas);

  const fetchData = (payload: string) => {
    const arrOfSuggestions: Country[] = [
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Åland Islands', code: 'AX' },
      { name: 'Albania', code: 'AL' },
      { name: 'Algeria', code: 'DZ' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'AndorrA', code: 'AD' },
      { name: 'Angola', code: 'AO' },
      { name: 'Anguilla', code: 'AI' },
      { name: 'Antarctica', code: 'AQ' },
      { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' },
      { name: 'Azerbaijan', code: 'AZ' },
      { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' },
      { name: 'Bangladesh', code: 'BD' },
      { name: 'Barbados', code: 'BB' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Belize', code: 'BZ' },
      { name: 'Benin', code: 'BJ' },
      { name: 'Bermuda', code: 'BM' },
      { name: 'Bhutan', code: 'BT' },
      { name: 'Bolivia', code: 'BO' },
      { name: 'Bosnia and Herzegovina', code: 'BA' },
      { name: 'Botswana', code: 'BW' },
      { name: 'Bouvet Island', code: 'BV' },
      { name: 'Brazil', code: 'BR' },
      { name: 'British Indian Ocean Territory', code: 'IO' },
      { name: 'Brunei Darussalam', code: 'BN' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Burkina Faso', code: 'BF' },
      { name: 'Burundi', code: 'BI' },
      { name: 'Cambodia', code: 'KH' },
      { name: 'Cameroon', code: 'CM' },
      { name: 'Canada', code: 'CA' },
      { name: 'Cape Verde', code: 'CV' },
      { name: 'Cayman Islands', code: 'KY' },
      { name: 'Central African Republic', code: 'CF' },
      { name: 'Chad', code: 'TD' },
      { name: 'Chile', code: 'CL' },
      { name: 'China', code: 'CN' },
      { name: 'Christmas Island', code: 'CX' },
      { name: 'Cocos (Keeling) Islands', code: 'CC' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Comoros', code: 'KM' },
      { name: 'Congo', code: 'CG' },
      { name: 'Congo, The Democratic Republic of the', code: 'CD' },
      { name: 'Cook Islands', code: 'CK' },
      { name: 'Costa Rica', code: 'CR' },
      { name: 'Cote D"Ivoire', code: 'CI' },
      { name: 'Croatia', code: 'HR' },
      { name: 'Cuba', code: 'CU' },
      { name: 'Cyprus', code: 'CY' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Djibouti', code: 'DJ' },
      { name: 'Dominica', code: 'DM' },
      { name: 'Dominican Republic', code: 'DO' },
      { name: 'Ecuador', code: 'EC' },
      { name: 'Egypt', code: 'EG' },
      { name: 'El Salvador', code: 'SV' },
      { name: 'Equatorial Guinea', code: 'GQ' },
      { name: 'Eritrea', code: 'ER' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Ethiopia', code: 'ET' },
      { name: 'Falkland Islands (Malvinas)', code: 'FK' },
      { name: 'Faroe Islands', code: 'FO' },
      { name: 'Fiji', code: 'FJ' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'French Guiana', code: 'GF' },
      { name: 'French Polynesia', code: 'PF' },
      { name: 'French Southern Territories', code: 'TF' },
      { name: 'Gabon', code: 'GA' },
      { name: 'Gambia', code: 'GM' },
      { name: 'Georgia', code: 'GE' },
      { name: 'Germany', code: 'DE' },
      { name: 'Ghana', code: 'GH' },
      { name: 'Gibraltar', code: 'GI' },
      { name: 'Greece', code: 'GR' },
      { name: 'Greenland', code: 'GL' },
      { name: 'Grenada', code: 'GD' },
      { name: 'Guadeloupe', code: 'GP' },
      { name: 'Guam', code: 'GU' },
      { name: 'Guatemala', code: 'GT' },
      { name: 'Guernsey', code: 'GG' },
      { name: 'Guinea', code: 'GN' },
      { name: 'Guinea-Bissau', code: 'GW' },
      { name: 'Guyana', code: 'GY' },
      { name: 'Haiti', code: 'HT' },
      { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
      { name: 'Holy See (Vatican City State)', code: 'VA' },
      { name: 'Honduras', code: 'HN' },
      { name: 'Hong Kong', code: 'HK' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Iceland', code: 'IS' },
      { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Iran, Islamic Republic Of', code: 'IR' },
      { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Isle of Man', code: 'IM' },
      { name: 'Israel', code: 'IL' },
      { name: 'Italy', code: 'IT' },
      { name: 'Jamaica', code: 'JM' },
      { name: 'Japan', code: 'JP' },
      { name: 'Jersey', code: 'JE' },
      { name: 'Jordan', code: 'JO' },
      { name: 'Kazakhstan', code: 'KZ' },
      { name: 'Kenya', code: 'KE' },
      { name: 'Kiribati', code: 'KI' },
      { name: 'Korea, Democratic People"S Republic of', code: 'KP' },
      { name: 'Korea, Republic of', code: 'KR' },
      { name: 'Kuwait', code: 'KW' },
      { name: 'Kyrgyzstan', code: 'KG' },
      { name: 'Lao People"S Democratic Republic', code: 'LA' },
      { name: 'Latvia', code: 'LV' },
      { name: 'Lebanon', code: 'LB' },
      { name: 'Lesotho', code: 'LS' },
      { name: 'Liberia', code: 'LR' },
      { name: 'Libyan Arab Jamahiriya', code: 'LY' },
      { name: 'Liechtenstein', code: 'LI' },
      { name: 'Lithuania', code: 'LT' },
      { name: 'Luxembourg', code: 'LU' },
      { name: 'Macao', code: 'MO' },
      { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
      { name: 'Madagascar', code: 'MG' },
      { name: 'Malawi', code: 'MW' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Maldives', code: 'MV' },
      { name: 'Mali', code: 'ML' },
      { name: 'Malta', code: 'MT' },
      { name: 'Marshall Islands', code: 'MH' },
      { name: 'Martinique', code: 'MQ' },
      { name: 'Mauritania', code: 'MR' },
      { name: 'Mauritius', code: 'MU' },
      { name: 'Mayotte', code: 'YT' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Micronesia, Federated States of', code: 'FM' },
      { name: 'Moldova, Republic of', code: 'MD' },
      { name: 'Monaco', code: 'MC' },
      { name: 'Mongolia', code: 'MN' },
      { name: 'Montserrat', code: 'MS' },
      { name: 'Morocco', code: 'MA' },
      { name: 'Mozambique', code: 'MZ' },
      { name: 'Myanmar', code: 'MM' },
      { name: 'Namibia', code: 'NA' },
      { name: 'Nauru', code: 'NR' },
      { name: 'Nepal', code: 'NP' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Netherlands Antilles', code: 'AN' },
      { name: 'New Caledonia', code: 'NC' },
      { name: 'New Zealand', code: 'NZ' },
      { name: 'Nicaragua', code: 'NI' },
      { name: 'Niger', code: 'NE' },
      { name: 'Nigeria', code: 'NG' },
      { name: 'Niue', code: 'NU' },
      { name: 'Norfolk Island', code: 'NF' },
      { name: 'Northern Mariana Islands', code: 'MP' },
      { name: 'Norway', code: 'NO' },
      { name: 'Oman', code: 'OM' },
      { name: 'Pakistan', code: 'PK' },
      { name: 'Palau', code: 'PW' },
      { name: 'Palestinian Territory, Occupied', code: 'PS' },
      { name: 'Panama', code: 'PA' },
      { name: 'Papua New Guinea', code: 'PG' },
      { name: 'Paraguay', code: 'PY' },
      { name: 'Peru', code: 'PE' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Pitcairn', code: 'PN' },
      { name: 'Poland', code: 'PL' },
      { name: 'Portugal', code: 'PT' },
      { name: 'Puerto Rico', code: 'PR' },
      { name: 'Qatar', code: 'QA' },
      { name: 'Reunion', code: 'RE' },
      { name: 'Romania', code: 'RO' },
      { name: 'Russian Federation', code: 'RU' },
      { name: 'RWANDA', code: 'RW' },
      { name: 'Saint Helena', code: 'SH' },
      { name: 'Saint Kitts and Nevis', code: 'KN' },
      { name: 'Saint Lucia', code: 'LC' },
      { name: 'Saint Pierre and Miquelon', code: 'PM' },
      { name: 'Saint Vincent and the Grenadines', code: 'VC' },
      { name: 'Samoa', code: 'WS' },
      { name: 'San Marino', code: 'SM' },
      { name: 'Sao Tome and Principe', code: 'ST' },
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'Senegal', code: 'SN' },
      { name: 'Serbia and Montenegro', code: 'CS' },
      { name: 'Seychelles', code: 'SC' },
      { name: 'Sierra Leone', code: 'SL' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Slovakia', code: 'SK' },
      { name: 'Slovenia', code: 'SI' },
      { name: 'Solomon Islands', code: 'SB' },
      { name: 'Somalia', code: 'SO' },
      { name: 'South Africa', code: 'ZA' },
      { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
      { name: 'Spain', code: 'ES' },
      { name: 'Sri Lanka', code: 'LK' },
      { name: 'Sudan', code: 'SD' },
      { name: 'Suriname', code: 'SR' },
      { name: 'Svalbard and Jan Mayen', code: 'SJ' },
      { name: 'Swaziland', code: 'SZ' },
      { name: 'Sweden', code: 'SE' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Syrian Arab Republic', code: 'SY' },
      { name: 'Taiwan', code: 'TW' },
      { name: 'Tajikistan', code: 'TJ' },
      { name: 'Tanzania, United Republic of', code: 'TZ' },
      { name: 'Thailand', code: 'TH' },
      { name: 'Timor-Leste', code: 'TL' },
      { name: 'Togo', code: 'TG' },
      { name: 'Tokelau', code: 'TK' },
      { name: 'Tonga', code: 'TO' },
      { name: 'Trinidad and Tobago', code: 'TT' },
      { name: 'Tunisia', code: 'TN' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Turkmenistan', code: 'TM' },
      { name: 'Turks and Caicos Islands', code: 'TC' },
      { name: 'Tuvalu', code: 'TV' },
      { name: 'Uganda', code: 'UG' },
      { name: 'Ukraine', code: 'UA' },
      { name: 'United Arab Emirates', code: 'AE' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'United States', code: 'US' },
      { name: 'United States Minor Outlying Islands', code: 'UM' },
      { name: 'Uruguay', code: 'UY' },
      { name: 'Uzbekistan', code: 'UZ' },
      { name: 'Vanuatu', code: 'VU' },
      { name: 'Venezuela', code: 'VE' },
      { name: 'Viet Nam', code: 'VN' },
      { name: 'Virgin Islands, British', code: 'VG' },
      { name: 'Virgin Islands, U.S.', code: 'VI' },
      { name: 'Wallis and Futuna', code: 'WF' },
      { name: 'Western Sahara', code: 'EH' },
      { name: 'Yemen', code: 'YE' },
      { name: 'Zambia', code: 'ZM' },
      { name: 'Zimbabwe', code: 'ZW' },
    ];

    const PAYLOAD: string = payload.toLowerCase();

    return arrOfSuggestions
      .filter((crt) => {
        return crt.name.toLowerCase().includes(PAYLOAD);
      })
      .reduce((acc: string[], cur: Country) => {
        return [...acc, cur.name];
      }, [] as string[]);
  };

  const mock = (payload: string) => {
    return new Promise<string[]>((res) => {
      setTimeout(() => res(fetchData(payload)), 1000);
    });
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('in handlechane', e.target.name);
    if (e.target.value.length < 3) return;
    // const data = await mock(e.target.value);
    // TODO: replace the above fn with useQueries refetch()
    try {
      // const res = await fetch(
      //   `https://restcountries.com/v3.1/name/${e.target.value}`,
      //   // 'https://api.vedastro.org/Calculate/SouthIndianChart/Location/Ahmedabad,Gujarat,India/Time/00:36/22/12/1998/+00:00',
      // );

      // const data = await res.json();
      // console.log(data);

      // const reducedData = data.reduce((acc: string[], cur: CountryMain[]) => {
      //   return [...acc, cur.name.official];
      // }, [] as string[]);
      // console.log(reducedData);
      // if (e.target.name === 'country') setCountrySuggestion(reducedData);
      // else if (e.target.name === 'state') setStateSuggestion(reducedData);
      // else if (e.target.name === 'city') setCitySuggestion(reducedData);
      // return data;

      fetch(
        'https://api.vedastro.org/Calculate/SouthIndianChart/Location/Ahmedabad,Gujarat,India/Time/00:36/22/12/1998/+00:00',
      )
        .then((res) => res.text())
        .then((res) => {
          const holder = document.createElement('div');
          holder.innerHTML = res;
          console.log(holder.querySelector('path'));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    region: string,
  ) => {
    const target = e.target as HTMLLIElement;
    if (region === 'country') {
      setValue('country', target.innerText);
    } else if (region === 'state') {
      setValue('state', target.innerText);
    } else if (region === 'city') {
      setValue('city', target.innerText);
    }

    setCountrySuggestion([]);
    setStateSuggestion([]);
    setCitySuggestion([]);
  };

  // console.log(watch('name')); // watch input value by passing the name of it

  // console.log(errors.gender);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className={style.form_wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className={style.field_name}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Name"
            {...register('name', { required: 'Name is Required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className={style.field_gender}>
          <legend>Gender</legend>
          <div>
            <input
              id="male"
              {...register('gender', { required: 'Gender is required' })}
              type="radio"
              value="Male"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="female"
              {...register('gender', { required: 'Gender is required' })}
              type="radio"
              value="Female"
            />
            <label htmlFor="female">Female</label>
          </div>

          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <div className={style.field_date}>
          <label>Date</label>
          <input
            className={style.datepicker_input}
            type="date"
            {...register('date', {
              valueAsDate: true,
              required: 'Birth Date is required',
            })}
          />
          {errors.date && <span>{errors.date.message}</span>}
        </div>
        <div className={style.field_time}>
          <div className={style.field_time_hrs}>
            <label htmlFor="hrs">HRS</label>
            <input
              id="hrs"
              {...register('hrs', {
                min: { value: 1, message: 'Minimum can not be less than 1' },
                max: {
                  value: 12,
                  message: 'Maximun can not be greater than 12',
                },
                required: 'HRS is required',
              })}
              type="number"
            />
            {errors.hrs && <span>{errors.hrs.message}</span>}
          </div>
          <div className={style.field_time_min}>
            <label htmlFor="min">MIN</label>
            <input
              id="min"
              {...register('min', {
                min: { value: 0, message: 'Minimum can not be less than 0' },
                max: {
                  value: 59,
                  message: 'Maximun can not be greater than 59',
                },
                required: 'MIN is required',
              })}
              type="number"
            />
            {errors.min && <span>{errors.min.message}</span>}
          </div>
          <div className={style.field_time_sec}>
            <label htmlFor="sec">SEC</label>
            <input
              id="sec"
              {...register('sec', {
                min: { value: 0, message: 'Minimum can not be less than 0' },
                max: {
                  value: 59,
                  message: 'Maximun can not be greater than 12',
                },
                required: 'Sec is required',
              })}
              type="number"
            />
            {errors.sec && <span>{errors.sec.message}</span>}
          </div>
        </div>
        <div className={style.field_location}>
          <div className={style.field_country}>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              {...register('country', {
                required: 'Country is required',
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
            {countrySuggestion.length > 0 && (
              <ul className={style.suggestion_wrapper}>
                {countrySuggestion.map((sug) => {
                  return (
                    <li key={sug} onClick={(e) => handleSelect(e, 'country')}>
                      {sug}
                    </li>
                  );
                })}
              </ul>
            )}
            {errors.country && <span>{errors.country.message}</span>}
          </div>

          <div className={style.field_state}>
            <label htmlFor="state">State</label>
            <input
              id="state"
              {...register('state', {
                required: 'State is required',
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
            {stateSuggestion.length > 0 && (
              <ul className={style.suggestion_wrapper}>
                {stateSuggestion.map((sug) => {
                  return (
                    <li key={sug} onClick={(e) => handleSelect(e, 'state')}>
                      {sug}
                    </li>
                  );
                })}
              </ul>
            )}
            {errors.state && <span>{errors.state.message}</span>}
          </div>

          <div className={style.field_city}>
            <label htmlFor="city">City</label>
            <input
              id="city"
              {...register('city', {
                required: 'City is required',
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
            {citySuggestion.length > 0 && (
              <ul className={style.suggestion_wrapper}>
                {citySuggestion.map((sug) => {
                  return (
                    <li key={sug} onClick={(e) => handleSelect(e, 'city')}>
                      {sug}
                    </li>
                  );
                })}
              </ul>
            )}
            {errors.city && <span>{errors.city.message}</span>}
          </div>
        </div>

        <input className={style.submit} type="submit" />
      </form>
    </div>
  );
};

export default Form;
