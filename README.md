# To-Do-List-2022
1.Create a button (Add) that will open the sidebar on the right side of the webbrowser.
2.Add two input fields in the sidebar: input 'date', input 'text' and the button 'Save'.
3.After filling input 'Date' and input 'Text' and clicking on button 'Save', the note should appear on the left side of the webbrowser and in the array. a) On the page, input 'Date' and input 'Text' should have space between! b) After kilicking on the button 'Save' the sidebar must hide
4.Save data to local storage. 6 Display data on the page from the localStorage
5.Сreate a function so that there is no duplication in the code.
6.Сreate and button 'Edit' for each note on the page.
7.By clicking on 'Edit', open a side-bar for editing.
8.By clicking on 'Edit' in the inputs of the sidebar, display the data from the current note.
9.When editing, by clicking on'Save', change the data in the array and in the current note. The button 'Save' should do two different things: add and edit By clicking on 'Save' we must give each action its own state (boolean)
10.To edit the note, we need the index of this note, which is located in the for loop. You can pass the index through arguments in the function.
11.By clicking on edit, we re receive index and send it to the function 'Save'. We save it to in an array, in Edit.
12.By editing (Clicking on save) in the current note, change the text content in the spans with children.

Project N3 ToDoList

1. Создать кнопку(Add) которая откроет сайд-бар.
2. Добавить форму добавления на сайд-бар в которой будет: дата создания, текст записи и save.
3. После заполнения input, по нажатие на кнопку Save, запись должна появляться в массиве и на странице. (Обьект)
a)  на странице записи должны быть раздельные
4. Сайд-бар должен скрыться.
5. Сохранить данные в localStorage 
6  Отобразить данные на странице из localStorage
7. Cделать код универсальным
7. Каждая запись должна иметь кнопку редактирования
8. По нажатию на Edit, открыть сайд-бар с полями для редактирования. 
9.В полях Edit отобразить данные из текущей записи.
10. При редактировании, нажатие на кнопку save  изменять данные в массиве и в текущем поле.
   При нажатии на кнопку save должны выполнятся два разных действия:
а) Если было редактирование, то выполняется действие редактирования. Для этого нужно дать состояние кнопке(Boolean)  при Edit или при Add
б) Если было добавление, то выполняется для добавления. 
11) Что бы отредактировать нужную запись нам необходим индекс этой записи, который находится в цикле for. Передать индекс можно через аргументы функции.
12) На клике edit мы принимаем этот индекс и отправляем его в кнопку Save где и сохраняем в массив, в условиях на Edit редактированную запись.
13) По клику на кнопку save так же поменять контент в браузере (Порядкок html элементов: ul и children по индексу; ul и(номер нужного элемента))
a) После редактирования обязательно сбросить настройки к первоначальным. Состояние кнопки Save должно быть прежним.
b) Сразу очистить поля после редактирования
14) Если мы захотим сразу же отредактировать последнюю запись, то не получится потому что  при добавлении, массив не может определить последний индекс элемента, поэтому при вызове функции отвечающей за рендер строки нужно передать в аргументах индекс последнего элемента массива. 
15) Создать кнопку которая будет удалять запись в браузере в массиве и в локальном хранилище
