import styled from 'styled-components'

const TrendStyle = styled.div`
  padding: 5px 30px;
  width: 390px;
`

const TrendSearchStyle = styled.div`
  width: 350px;
  height: 40px;
  background: #15181c;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 10px;
`

const TrendSearchInputStyle = styled.input`
  color: #6e767d;
  border: none;
  background: transparent;
  outline: none;
  margin-left: 10px;
  font-size: 15px;
`

const TrendPostStyle = styled.div`
  border-bottom: 1px solid #6e767d;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: #6e767d;
  background: #15181c;
`

const TrendPostTitleStyle = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`

const TrendPostHashtagStyle = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  margin-top: 4px;
  margin-bottom: 4px;
`

const TrendPostTextStyle = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
`
const TrendPostTextWith = styled.a`
  color: #1da1f2;
  text-decoration: none;
`
const TrendPostPromoteTextStyle = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-top: 6px;
`

export {
  TrendStyle,
  TrendSearchStyle,
  TrendSearchInputStyle,
  TrendPostStyle,
  TrendPostTitleStyle,
  TrendPostHashtagStyle,
  TrendPostTextStyle,
  TrendPostTextWith,
  TrendPostPromoteTextStyle,
}
