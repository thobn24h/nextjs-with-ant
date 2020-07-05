import headerStyled from '../components/Header.module.css'
import { Button } from 'antd';

export default () => {
  return (
    <>
      <div className={headerStyled.appc}>
        Test Module CSS
      </div>
      <div>
        <Button type="primary">Test Ant Button</Button>
      </div>
    </>
  )
}
