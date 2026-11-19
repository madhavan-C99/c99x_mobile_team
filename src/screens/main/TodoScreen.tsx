import { useRef, useState, ComponentRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Button from '@/components/common/Button';
import TodoItem from '@/components/common/TodoItem';
import FilterBar from '@/components/common/FilterBar';
import useTodos from '@/hooks/useTodos';
import { Filter } from '@/models/todo.model';




const TodoScreen = () => {
  const { todos, loading, doneCount, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [text, setText] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('all');
const inputRef = useRef<ComponentRef<typeof TextInput>>(null);


  const handleAdd = () => {
    addTodo(text);
    setText('');
    inputRef.current?.focus(); // add panna aprom input-ah thirumba focus pannum
  };

  const visibleTodos = todos.filter(t => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  if (loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todos</Text>
      <Text style={styles.counter}>
        {doneCount} / {todos.length} done
      </Text>

      <TextInput
        ref={inputRef}
        value={text}
        onChangeText={setText}
        placeholder="You can add a new todo..."
        returnKeyType="done"
        onSubmitEditing={handleAdd}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAdd} disabled={!text.trim()} />

      <View style={styles.filterWrap}>
        <FilterBar current={filter} onChange={setFilter} />
      </View>

      <FlatList
        data={visibleTodos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Todos edhuvum illa</Text>}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#f1f5f9',
  },
  loading: { marginTop: 100, textAlign: 'center', fontSize: 16 },
  heading: { fontSize: 28, fontWeight: '700', color: '#0f172a' },
  counter: { fontSize: 14, color: '#64748b', marginBottom: 12 },
  input: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  filterWrap: { marginTop: 16 },
  empty: { textAlign: 'center', color: '#94a3b8', marginTop: 32 },
});

export default TodoScreen;