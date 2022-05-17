import React from 'react'
import styles from './Settings.module.scss'
import { MyButton } from '../../../../../custom/UI/MyButton/MyButton'
import { MyInput } from '../../../../../custom/UI/MyInput/MyInput'

const Settings = ({
	nameValue,
	changeNameText,
	secondNameValue,
	changeSecondNameText,
	changeDateText,
	changeCountryText,
	dateValue,
	changeCityText,
	countryValue,
	changeUniverText,
	changeUniverDateText,
	cityValue,
	univerValue,
	changeCheckBoxWork,
	univerDateValue,
	changeSettingsButton,
	checked,
}) => {
	return (
		<div className={styles.settingsMain}>
			<div className={styles.settingsWrapper}>
				<h1 className={styles.title}>Редактировать профиль</h1>
				<div className={styles.settingsItem}>
					<MyInput
						value={nameValue}
						onChange={changeNameText}
						labelID={'userName'}
						label={'Имя'}
						placeHolder='Введите имя...'
						type='text'
					/>
				</div>

				<div className={styles.settingsItem}>
					<MyInput
						value={secondNameValue}
						onChange={changeSecondNameText}
						labelID={'userSecondName'}
						label={'Фамилия'}
						placeHolder='Введите фамилию...'
						type='text'
					/>
				</div>

				<div className={styles.settingsItem}>
					<MyInput
						onChange={changeDateText}
						value={dateValue}
						labelID={'userHB'}
						label={'Дата рождения'}
						placeHolder='Выберите дату рождения...'
						type='date'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						onChange={changeCountryText}
						value={countryValue}
						labelID={'country'}
						label={'Страна'}
						placeHolder='Укажите страну...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						onChange={changeCityText}
						value={cityValue}
						labelID={'city'}
						label={'Город'}
						placeHolder='Укажите город...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						onChange={changeUniverText}
						value={univerValue}
						labelID={'univer'}
						label={'Укниверситет'}
						placeHolder='Укажите университет...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						onChange={changeUniverDateText}
						value={univerDateValue}
						labelID={'univerDate'}
						label={'Дата окончания университета'}
						placeHolder='Укажите дату окончания университета...'
						type='date'
					/>
				</div>
				<div className={`${styles.settingsItem} ${styles.checkBox}`}>
					<div className={styles.CheckBoxWrapper}>
						<div className={styles.labelWrapper}>
							<label className={styles.label} htmlFor='work'>
								В поисках работы
							</label>
						</div>
						<input
							defaultChecked={checked}
							onChange={changeCheckBoxWork}
							type='checkbox'
							id='work'
							className={styles.inputCheckbox}
						/>
					</div>
				</div>
			</div>

			<div classs={styles.btnWrapper}>
				<MyButton onClick={changeSettingsButton}>Сохранить изменения</MyButton>
			</div>
		</div>
	)
}

export default Settings
