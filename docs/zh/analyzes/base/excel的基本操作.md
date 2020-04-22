
# 准备锅
1. 安装 anaconda
2. 打开 `anaconda` 启动 jupyter lab


```python
import pandas as pd
```


```python
df = pd.DataFrame({'age': [3, 29], 'height': [173,156], 'weight':[52, 56]})
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>age</th>
      <th>height</th>
      <th>weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>3</td>
      <td>173</td>
      <td>52</td>
    </tr>
    <tr>
      <th>1</th>
      <td>29</td>
      <td>156</td>
      <td>56</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.rename(index={0:'张三', 1: '李四'})
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>age</th>
      <th>height</th>
      <th>weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>张三</th>
      <td>3</td>
      <td>173</td>
      <td>52</td>
    </tr>
    <tr>
      <th>李四</th>
      <td>29</td>
      <td>156</td>
      <td>56</td>
    </tr>
  </tbody>
</table>
</div>




```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>age</th>
      <th>height</th>
      <th>weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>3</td>
      <td>173</td>
      <td>52</td>
    </tr>
    <tr>
      <th>1</th>
      <td>29</td>
      <td>156</td>
      <td>56</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.index=['A', 'B']
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>age</th>
      <th>height</th>
      <th>weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>3</td>
      <td>173</td>
      <td>52</td>
    </tr>
    <tr>
      <th>B</th>
      <td>29</td>
      <td>156</td>
      <td>56</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.shape
```




    (2, 3)




```python
df.info
```




    <bound method DataFrame.info of    age  height  weight
    A    3     173      52
    B   29     156      56>




```python
df2 = pd.read_excel(r'G:\jupyter_notebook\test_excel.xlsx')
df2
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>班级</th>
      <th>姓名</th>
      <th>成绩</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>一班</td>
      <td>张三</td>
      <td>88</td>
    </tr>
    <tr>
      <th>1</th>
      <td>一班</td>
      <td>李四</td>
      <td>76</td>
    </tr>
    <tr>
      <th>2</th>
      <td>二班</td>
      <td>王五</td>
      <td>92</td>
    </tr>
    <tr>
      <th>3</th>
      <td>二班</td>
      <td>赵六</td>
      <td>54</td>
    </tr>
    <tr>
      <th>4</th>
      <td>三班</td>
      <td>小明</td>
      <td>63</td>
    </tr>
  </tbody>
</table>
</div>




```python
df2.describe
```




    <bound method NDFrame.describe of    班级  姓名  成绩
    0  一班  张三  88
    1  一班  李四  76
    2  二班  王五  92
    3  二班  赵六  54
    4  三班  小明  63>


