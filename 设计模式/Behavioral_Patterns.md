## 观察者模式 Observer
举个例子，比如警察一直观察着张三的一举一动，只要张三有什么违法行为，警察马上行动，抓捕张三。

这个过程中：

- 警察称之为观察者（Observer）
- 张三称之为被观察者（Observable，可观察的）
- 警察观察张三的这个行为称之为订阅（subscribe），或者注册（register）
- 张三违法后，警察抓捕张三的行动称之为响应（update）

观察者模式（Observer Pattern）：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。
```java
//观察者接口
public interface Observer {
    void update(String event);
}
//被观察者接口
public class Observable {

    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers(String event) {
        for (Observer observer : observers) {
            observer.update(event);
        }
    }
}

//警察属于观察者
public class PoliceObserver implements Observer {
    @Override
    public void update(String event) {
        System.out.println("警察收到消息，罪犯在" + event);
    }
}

//犯罪者属于被观察者
public class CriminalObservable extends Observable {
    public void crime(String event) {
        System.out.println("罪犯正在" + event);
        notifyObservers(event);
    }
}

public class Client {
    @Test
    public void test() {
        CriminalObservable zhangSan = new CriminalObservable();
        PoliceObserver police1 = new PoliceObserver();
        PoliceObserver police2 = new PoliceObserver();
        PoliceObserver police3 = new PoliceObserver();
        zhangSan.addObserver(police1);
        zhangSan.addObserver(police2);
        zhangSan.addObserver(police3);
        zhangSan.crime("放狗咬人");
    }
}
```