

```python
%matplotlib inline
%config InlineBackend.figure_format = 'svg'
```


```python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.sans-serif'] = ['SimHei'] #指定默认字体
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号
# 使用ggplot配色方案
plt.style.use('ggplot')
```


```python
# 创建画布，画图
fig = plt.figure(figsize=(8,6))
x = np.arange(6)
y = np.arange(6)
plt.plot(x,y)
plt.bar(x,y)
plt.title('线性增长')
```




    Text(0.5, 1.0, '线性增长')




![svg](/img/output_2_1.svg)



```python
x = np.linspace(0,2,100)
fig, ax = plt.subplots()
ax.plot(x,x,label='linear')
ax.plot(x,x**2, label='quadratic')
ax.plot(x, x**3, label='cubic')
ax.set_xlabel('x label')
ax.set_ylabel('y label')
ax.set_title('Simple Plot')
ax.legend()
```




    <matplotlib.legend.Legend at 0x1aa15788b08>




![svg](/img/output_3_1.svg)



```python
x = np.linspace(0,2,100)
x
```




    array([0.        , 0.02020202, 0.04040404, 0.06060606, 0.08080808,
           0.1010101 , 0.12121212, 0.14141414, 0.16161616, 0.18181818,
           0.2020202 , 0.22222222, 0.24242424, 0.26262626, 0.28282828,
           0.3030303 , 0.32323232, 0.34343434, 0.36363636, 0.38383838,
           0.4040404 , 0.42424242, 0.44444444, 0.46464646, 0.48484848,
           0.50505051, 0.52525253, 0.54545455, 0.56565657, 0.58585859,
           0.60606061, 0.62626263, 0.64646465, 0.66666667, 0.68686869,
           0.70707071, 0.72727273, 0.74747475, 0.76767677, 0.78787879,
           0.80808081, 0.82828283, 0.84848485, 0.86868687, 0.88888889,
           0.90909091, 0.92929293, 0.94949495, 0.96969697, 0.98989899,
           1.01010101, 1.03030303, 1.05050505, 1.07070707, 1.09090909,
           1.11111111, 1.13131313, 1.15151515, 1.17171717, 1.19191919,
           1.21212121, 1.23232323, 1.25252525, 1.27272727, 1.29292929,
           1.31313131, 1.33333333, 1.35353535, 1.37373737, 1.39393939,
           1.41414141, 1.43434343, 1.45454545, 1.47474747, 1.49494949,
           1.51515152, 1.53535354, 1.55555556, 1.57575758, 1.5959596 ,
           1.61616162, 1.63636364, 1.65656566, 1.67676768, 1.6969697 ,
           1.71717172, 1.73737374, 1.75757576, 1.77777778, 1.7979798 ,
           1.81818182, 1.83838384, 1.85858586, 1.87878788, 1.8989899 ,
           1.91919192, 1.93939394, 1.95959596, 1.97979798, 2.        ])




```python
def my_plotter(ax, data1, data2, param_dict):
    """
    A helper function to make a grah
    """
    out = ax.plot(data1, data2, **param_dict)
    return out
```


```python
data1, data2, data3, data4 = np.random.randn(4,100)
fig, ax = plt.subplots(1,1)
my_plotter(ax, data1, data2, {'marker': 'x'})
```




    [<matplotlib.lines.Line2D at 0x1aa16a9bf88>]




![svg](/img/output_6_1.svg)



```python

```
