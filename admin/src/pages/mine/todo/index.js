import { connect } from 'dva';
import { Card, Calendar, Drawer } from 'antd';
import moment from 'moment';
import { dateFormat } from '@/utils';
import { DayList, MonthList, FirstModal } from '@/components/pages-todo';
import styles from './index.less';

const startMoment = '1989-10-01';
const endMoment = moment().add(1, 'month').endOf('month').format();
const namespace = 'todo';

const TodoView = ({
  dispatch,
  location,
  todo: {
    data,
    currentDate,
    dateSearch,
    dateMode,

    drawerVisible,
    drawerItem,

    type,
    visible,
    modalItem
  },
  loading
}) => {
  const isLoaded = loading.effects[`${namespace}/query`];

  // 日历
  const calendarProps = {
    className: styles.calendar,
    defaultValue: moment(dateSearch),
    mode: dateMode,
    validRange: [ moment(startMoment), moment(endMoment)],
    monthCellRender: (value) => {
      value = dateFormat(value, 'YYYY-M');
      const listData = data[value] || {};
      return <MonthList data={listData} />
    },
    dateCellRender(value) {
      value = dateFormat(value);
      const listData = data[value] || [];
      return <DayList data={listData} />
    },
    onPanelChange(date, mode) {
      const format = (mode === 'year') ? 'YYYY-MM' : 'YYYY-MM-DD';
      const dateSearch = dateFormat(date, format);
      dispatch({
        type: `${namespace}/save`,
        payload: {
          dateMode: mode,
          dateSearch
        }
      });
      dispatch({
        type: `${namespace}/query`,
        payload: {
          dateSearch
        }
      });
    },
    onSelect(value) {
      const format = (dateMode === 'year') ? 'YYYY-M' : 'YYYY-M-D';
      const currentDate = dateFormat(value, format);
      dispatch({
        type: `${namespace}/showDrawer`,
        payload: { currentDate }
      });

      const listData = data[currentDate] || [];
      dispatch({
        type: `${namespace}/setDrawer`,
        payload: listData
      });
    }
  }

  // 抽屉
  const drawerTitle = (dateMode === 'year') ? moment(currentDate).format('YYYY年M月') : moment(currentDate).format('YYYY年M月D日');
  const drawerProps = {
    title: `${drawerTitle} 记事`,
    placement: "left",
    closable: true,
    width: 600,
    visible: drawerVisible,
    onClose() {
      dispatch({
        type: `${namespace}/hideDrawer`,
        payload: {
          currentDate: ''
        }
      });
    }
  }
  const dayListProps = {
    action: true,
    data: drawerItem,
    onAddTodo(){
      dispatch({
        type: `${namespace}/showModal`,
        payload: {
          type: 'add-todo'
        }
      })
    },
    onEditTodo(data){
      dispatch({
        type: `${namespace}/showModal`,
        payload: {
          type: 'edit-todo'
        }
      });
      dispatch({
        type: `${namespace}/setModal`,
        payload: data
      });
    },
    onDeleteTodo(data){
      const { id, title } = data;
      dispatch({
        type: `${namespace}/postDeleteTodo`,
        payload: { id, title }
      });
    },
    onSwitchTodo(data){
      let { id, title, status } = data;
      status = (status === 'todo') ? 'done' : 'todo';
      dispatch({
        type: `${namespace}/postUpdateTodo`,
        payload: { id, title, status }
      })
    }
  }
  const monthListProps = {
    action: true,
    data: drawerItem
  }
  const drawerContent = {
    'year': <MonthList {...monthListProps} />,
    'month': <DayList {...dayListProps} />
  }

  // 弹框
  const firstModalProps = {
    type,
    visible,
    modalItem,
    onOk(data){
      if(type === 'add-todo') {
        dispatch({
          type: `${namespace}/postCreateTodo`,
          payload: {
            title: data.title,
            description: data.description,
            category: data.category,
            time: currentDate
          }
        })
      }
      if(type === 'edit-todo') {
        dispatch({
          type: `${namespace}/postUpdateTodo`,
          payload: {
            id: data.id,
            title: data.title,
            description: data.description,
            category: data.category,
          }
        })
      }
    },
    onCancel(){
      dispatch({
        type: `${namespace}/hideModal`
      });
    }
  }

  return (
    <>
      <Card bordered={false} loading={isLoaded}>
        <Calendar {...calendarProps} />
      </Card>
      <Drawer {...drawerProps}>
        {drawerContent[dateMode]}
      </Drawer>
      <FirstModal {...firstModalProps} />
    </>
  );
}


export default connect(({ todo, loading }) => ({ todo, loading }))(TodoView)
