import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Row, Col, Table } from 'antd';
import { Link } from 'react-router';

const starking = [
  {
    name: 'About Us',
    id: 'About',
    text: `
<p>1] 公司名字（ 회사명칭대상）
한국 : 스타킹엔터테인먼트컴퍼니차이나, StarKing Entertainment corp.,
中文 : 成都斯塔星文化传媒有限合伙企业（有限合伙）</p>
<p>2] 公司介绍(회사소개)
StarKing Ent Corp(추후로는 SK로 표기)는 K-POP을 기반으로 한 Next China entertainment
입니다. 한국의 K-POP은 세계문화의 리더로서 전세계 아이콘이 되어버렸습니다.  SKEC는 창조적인 K-pop
 와 완성도 높은 한국 training system을 통해 Next china pop을 준비하고 만들려는 게 목적입니다.
  현재 중국은 엄청난 경제적 성장을 이루었고 세계 제1의 경제소비마켓입니다。 중국엔터테인먼트시장은
  과거, 현재, 그리고 미래에도 우리에겐 커다란 시장이고 기회입니다. SK는 이러한 거대시장이 세계
  문화의 중심이 될걸 예상하고 한발 앞서 거대한 중국시장에 China POP을 준비하고자 합니다. 저희
  SK의 준비된 미래를 만들어 가는 중입니다. 곧 저희 SK시스템으로 만들어진 스타가 K-POP과 C-POP로
  만들어진 SK-POP를 부르며 거대한 중국시장과 세계시장을 지배하게 될 것입니다.
StarKing Ent Corp （以下简称SK）是基于K-POP而成立的全新中国式娱乐公司。K-POP作为世界文化的
引领者，已然成为了全世界流行文化的标志。我们的目的是通过具有创造性的K-POP和高完成度的韩国训练模
式来创造全新C-POP。中国现今已实现了跨越式的经济增长，成为了全球第一大经济消费市场。无论是在过去，
现在，还是将来，中国的娱乐产业一直都是一个无比庞大的市场，同时这也是一个不可多得的机遇，基于此，
我们认为中国在未来必将成为世界文化的中心。因此我们想率先往前迈出第一步，为C-POP文化的大爆发做好
准备。现在我们也正在努力实现这样的目标，通过我们的训练模式培养出的艺人融合了K-POP和C-POP的优点，
将以独特的SK-pop风格出道，进而占据中国的娱乐产业市场乃至整个全球流行文化市场.</p>
<p>1. 회사명칭（公司名称） : 成都斯塔星文化传媒合伙企业公司(有限企业公司)
대표 구성원（公司股东） : King.HWANG(HWANG HO YOUNG), Ryan.HWANG(HWANG YUN SANG)
자본금출자구성 （出资比例）: HWANG HO YOUNG 66.7%,  HWANG YUN SANG 33.3%
초기설립자금（初期注册资金） : 600,000万</p>
<p>2. 구성원소개 （公司成员简介）
King.HWANG (본명표기 HWANG HO YOUNG)
직책 （职责）: CEO(Chief Executive Officer) 대표이사
StarKing entertainment china 대표
中国 成都斯塔星文化传媒合伙企业公司 董事长（中国区代表）
Ryan.HWANG(HWANG YUN SANG)
직책（职责） : COO(Chief operating Officer) 수석부사장
StarKing entertainment korea 대표
中国 成都斯塔星文化传媒合伙企业公司 副董事长（韩方代表）</p>
<p>3. C.I(Corporate Identity)MI(Mind Identity);한류를 바탕으로 중국엔터테인먼트의 번영을 이룩하는데 목적을 둡니다.
公司理念：基于韩流创造属于中国自己的全新流行文化
BI(Behavior Identity) ; 최고의 한국교육시스템을 기반으로 중국 스타를 발굴하는데 최선을 다합니다.
公司准则：采用韩国模式，打造中国新星
VI(Visual Identity) ; Logo Type & Symbol Mark</p>
<p>3] 사업개요 및 연혁 项目概要及沿革
2016년 10월 start ENT - 모집된 예비연습생을 대상으로 스타트 업 예정 Star娱乐
以招募到的预备练习生为对象开始实施starKing星计划
<h2>2016년 05월 ~ 9월</h2>
<p>- StarKing Ent 회사설립（成都斯塔星文化传媒有限企业） 및 대상자 모집</p>
<p>- 成立了（成都斯塔星文化传媒有限企业）并开始梦想招募</p>
<h2>2016년 03월</h2>
<p>- start ENT포스팀구축 – 고객서비스팀 구성</p>
<p>- 组建了start ENT初期筹备团队，客服团队</p>
<h2>2015-2016년</h2>
<p>- 충분한 검토를 통해 중국에 맞는 스타개발시스템을 적용시킬 계획수립</p>
<p>- 进行了细致的探讨，确立了一套适合中国的造星体系</p>
<h2>2010~2014년</h2>
<p>-  5년간 철저한 시장조사를 통해 가능성을 확인.</p>
<p>-  开展了为期5年的充分的市场调研，确定项目所具有的发展可能性</p>
</p>
<p>4] 향후 계획 및 전망 未来计划及前景
1년간의 철저한 트레이닝과 한국적 스타제조 시스템을 통해 선발된 차세대 C-POP스타를통해 새로운 문화아이템을 만들려는 목적
目的是通过为期一年的系统训练和韩国的造星模式，选出下一代中国流行之星，从而创造全新的文化体系。
2018년 3월 보이그룹 및 걸그룹, 개인, 혼성 등 최소 2개이상의 그룹을 데뷰 시킬 계획
2018年3月 计划成功推出男子团体、女子团体、个人、混合等至少两个以上的团体</p>

<p>5] address : StarKing Ent., cor. Meinian B/D C 270-271, Tianfuwujie zhong-lu,
gaoxin-qu, Chengdu-shi, Sichuan, China</p>
<p>地址 : 四川城 成都市 高新区 天府五街中路 美年广场 C座 270-271号 成都斯塔星文化传媒有限企业
Contact  No. 028)65009311</p>
联系电话：65009311
Homepage : www.starking8.com
公司主页： www.starking8.com
Email address： starking@starking8.com hwangjeakan@naver.com
公司邮箱： starking@starking8.com hwangjeakan@naver.com
Wechat : hwangjeakan	   QQ : starking8
微信：   hwangjeakan
`,
  },
  {
    name: 'Recruit',
    id: 'Recruit',
    text: '',
  },
  {
    id: 'Customer',
  },
  {
    name: 'Contact Us',
    id: 'Contact',
    text: `
    <p>address:StarKing Ent., cor. Meinian B/D C 270-271, Tianfuwujie zhong-lu,
    gaoxin-qu,Chengdu-shi, Sichuan, China</p>
    <p>地址 : 四川城 成都市 高新区 天府五街中路 美年广场 C座 270-271号 成都斯塔星文化传媒有限企业</p>
    <p>Contact  No. 028)65009311</p>
    <p>联系电话：65009311</p>
    <p>Homepage : www.starking8.com</p>
    <p>公司主页：www.starking8.com</p>
    <p>Email address：starking@starking8.com hwangjeakan@naver.com</p>
    <p>公司邮箱：starking@starking8.com hwangjeakan@naver.com</p>
    <p>Wechat :hwangjeakan</p>
    <p>QQ :starking8</p>
    <p>微信：hwangjeakan</p>
    <p>TEL：13668158653（高主任）18380458527（刘老师）15608072971（杨老师）</p>
    <p>15756289858（毛老师）15908165270（尹老师）</p>
    `,
  },
];

const news = [
  {
    id: 1,
    name: 'news1',
  },
  {
    id: 1,
    name: 'news1',
  },
  {
    id: 1,
    name: 'news1',
  },
  {
    id: 1,
    name: 'news1',
  },
];

class Notice extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

  static childContextTypes = { };

  componentDidMount() {
    this.setText(this.props.params.id);
  }

  componentDidUpdate() {
    this.setText(this.props.params.id);
  }

  setText(id) {
    console.log(id);
    const temp = [];
    for (let i = 0; i < starking.length; i++) {
      if (id === starking[i].id) {
        temp.push(starking[i].text);
      }
    }
    console.log(temp);
    document.querySelector('article').innerHTML = temp[0].trim();
  }

  render() {
    const columns = this.props.params.name === 'Starking' ? [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '标题',
      dataIndex: 'title',
      render(item) {
        return (
          item.id !== 'Customer' ?
            <Link
              to={`notice/Starking/${item.id}`}
            >{item.name}</Link> :
            <Link
              to="customer/1"
            >Customer Center</Link>
        );
      },
    }, {
      title: '时间',
      dataIndex: 'time',
    }] : [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '标题',
      dataIndex: 'title',
      render(item) {
        return (
          item.id !== 'Customer' ?
            <Link
              to={`notice/Notice/${item.id}`}
            >{item.name}</Link> :
            <Link
              to="customer/1"
            >Customer Center</Link>
        );
      },
    }, {
      title: '时间',
      dataIndex: 'time',
    }];

    const data = [];
    if (this.props.params.name === 'Starking') {
      for (let i = 0; i < starking.length; i++) {
        data.push({
          key: i + 1,
          title: starking[i],
          time: `${i}`,
        });
      }
    } else {
      for (let i = 0; i < news.length; i++) {
        data.push({
          key: i + 1,
          title: news[i],
          time: `${i}`,
        });
      }
    }

    const pagination = {
      total: data.length,
      showSizeChanger: false,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    };

    return (
      <div className={style.notice}>
        <Row type="flex" justify="center" align="middle">
          <Col span={17}>
            <h3>{this.props.params.name}</h3>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="top">
          <Col span={11}>
            <Row type="flex" justify="center" align="top">
              <div className={style.divider}></div>
              <Col span={20}>
                <h3>
                  {this.props.params.name === 'Starking' ? this.props.params.id : 'Notice Title'}
                </h3>
              </Col>
              <Col span={4}>
                <span>2016-8-5</span>
              </Col>
              <div className={style.divider}></div>
            </Row>
            <Row type="flex" justify="center" align="top">
              <Col span={24}>
                <div className={style.article}>
                  <article></article>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={5} offset={1}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={this.props.params.name === 'Starking' ? false : pagination}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notice;
