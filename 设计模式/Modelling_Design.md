# 设计模式

## 类图的六大关系
- 依赖 Dependency 
- 泛化 Generalization
- 实现 Implementation 
- 关联 Association
- 聚合 Aggregation 整体和部分的关系
- 组合 Composition 整体和部分的关系，但是整体和部分不可以分开

## 设计模式
- 创建型模式：单例模式、抽象工厂模式、原型模式、建造者模式、<font color="#dd0000">工厂模式</font>
- 结构型模式：<font color="#dd0000">适配器模式</font>、桥接模式、<font color="#dd0000">装饰模式</font>、<font color="#dd0000">代理模式</font>
- 行为型模式：<font color="#dd0000">模版方法模式</font>、命令模式、访问者模式、迭代器模式、<font color="#dd0000">观察者模式</font>、解释器模式、责任链模式，<font color="#dd0000">策略模式</font>

### 单例模式
采取一定的方法保证整个的软件系统中，对某个类<font color="#dd0000">只能存在一个对象实例</font>，而且该类只提供一个取得对象实例的方法。
- #### 饿汉式
静态常量
1）构造器私有化（防止new）
2）类的内部创建对象
3）向外暴露一个静态的公共方法。
```java
class Singleton01{
    //构造器私有化
    private Singleton01(){};

    //本类内部创建对象实例
    private static Singleton01 instance = new Singleton01();

    //提供一个公有的静态方法
    public static Singleton01 getInstance(){

    }
}
```

静态代码块
```java
class Singleton01{
    //1. 构造器私有化
    private Singleton(){

    };

    //2. 本类内部创建对象实例
    private static Singleton01 instance；
    static {//在静态代码块中，创建单例
      instance  = new Singleton01();
    } 

    //提供一个公有的静态方法
    public static Singleton01 getInstance(){

    }
}
```

优缺点：
在类装载的时候就完成了实例化。避免线程同步问题。
可能造成内存浪费。

- #### 懒汉式
```java
class Singleton02{
    //1. 构造器私有化
    private Singleton(){

    };

    //2. 本类内部创建对象实例
    private static Singleton02 instance；

    //线程不安全
    //提供一个公有的静态方法，当使用到该方法是才创建instance
    public static Singleton02 getInstance(){
        if(instance==null){
            instance = new Singleton02();
        }
        return instance;
    }

    //线程安全
    public static synchronized Singleton02 getInstance(){
        if(instance==null){
            instance = new Singleton02();
        }
        return instance;
    }
}
```
线程不安全的缺点：如果在多线程下，一个线程进入 if(instance==null)判断语句，还未来得及往下执行，另外一个线程也通过了这个判断语句，这是便会产生多个实例。所以在多线程下不能使用这种方式。
线程安全的缺点：效率太低，每个线程获取类的实例时候，执行getInstance（）方法都要进行同步。

- #### 双重检查
```java
class Singleton03{
    //1. 构造器私有化
    private Singleton(){

    };

    //2. 本类内部创建对象实例
    private static Singleton03 singleton;


    //3. 提供一个静态的公有方法，加入双重检查代码，解决线程安全问题，同时解决懒加载的问题。 
    public static Singleton03 getInstance(){
        if(singleton == null){
            synchronized (Singleton.class){
                if(singleton == null){
                    singleton = new Singleton03();
                }
            }
        }
    }
｝
```
线程安全，延迟加载，效率较高。

- #### 枚举
```java
enum Singleton{
    INSTANCE;
}
```
优点：不仅能避免线程同步，而且能防止反序列化重新创建新的对象

单例模式注意事项和细节说明
1） 单例模式保证了系统内存中该类只存在一个对象，节省了系统资源，对于一些需要频繁创建销毁的对象，使用单例模式可以提高系统性能。
2）想要实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使用new
3）单例模式使用的场景：需要频繁创建和销毁的对象，创建对象是好使过多或资源过多，但又经常用到的对象，工具类对象频繁访问数据库或文件的对象。

### 简单工厂模式
简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例
简单工厂模式：定义了一个创建对象的类，由这个类来封装实例化对象的行为（代码）
在软件开发中，当我们会用到大量的创建某种、某类或者某批对象时，就会用到工厂模式。
```java
public class FruitFactory {
    public Fruit create(String type){
        switch (type){
            case "苹果": return new Apple();
            case "梨子": return new Pear();
            default: throw new IllegalArgumentException("暂时没有这种水果");
        }
    }
}
```
```java
public class User {
    private void eat(){
        FruitFactory fruitFactory = new FruitFactory();
        Fruit apple = fruitFactory.create("苹果");
        Fruit pear = fruitFactory.create("梨子");
        apple.eat();
        pear.eat();
    }
}
```
事实上，将构建过程封装的好处不仅可以降低耦合,如果某个产品构造方法相当复杂，使用工厂模式可以大大减少代码重复。比如，如果生产一个苹果需要苹果种子、阳光、水分，将工厂修改如下：
```java
public class FruitFactory {
    public Fruit create(String type) {
        switch (type) {
            case "苹果":
                AppleSeed appleSeed = new AppleSeed();
                Sunlight sunlight = new Sunlight();
                Water water = new Water();
                return new Apple(appleSeed, sunlight, water);
            case "梨子":
                return new Pear();
            default:
                throw new IllegalArgumentException("暂时没有这种水果");
        }
    }
}
```

### 工厂模式 Factory
```java
public class SurgicalMaskFactory{

    public Mask create() {
        return new SurgicalMask();
    }
}


public class N95MaskFactory {
    public Mask create() {
        return new N95Mask();
    }
}

public class Client {

    @Test
    public void test() {
        SurgicalMaskFactory surgicalMaskFactory = new SurgicalMaskFactory();
        // 输出：这是医用口罩
        System.out.println(surgicalMaskFactory.create());
        N95MaskFactory N95MaskFactory = new N95MaskFactory();
        // 输出：这是 N95 口罩
        System.out.println(N95MaskFactory.create());
    }
}
```

### 抽象工厂模式
1）定义一个interface用于创建相关或有依赖关系的对象簇，而无需致命具体的类
2）抽象工厂模式可以将简单工厂模式和工厂模式进行整合
```java
public interface IFactory {
    Mask create();
}


public class SurgicalMaskFactory implements IFactory{

    @Override
    public Mask create() {
        return new SurgicalMask();
    }
}


public class N95MaskFactory implements IFactory {
    @Override
    public Mask create() {
        return new N95Mask();
    }
}

public class Client {

    @Test
    public void test() {
        IFactory surgicalMaskFactory = new SurgicalMaskFactory();
        // 输出：这是医用口罩
        System.out.println(surgicalMaskFactory.create());
        IFactory N95MaskFactory = new N95MaskFactory();
        // 输出：这是 N95 口罩
        System.out.println(N95MaskFactory.create());
    }
}
```
