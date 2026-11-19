
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import TodoScreen from '@/screens/main/TodoScreen';
import SplashScreenView from '@/screens/SplashScreenView';

// Native OS splash-ai screen-la hold panni vekkirom
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 1. Native splash-ai hide panrom
    SplashScreen.hideAsync();

    // 2. Namma custom splash content 2.5 seconds (2500ms) screen-la kaatitu main screen-ku pogum
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // First 2.5 seconds custom splash (Logo + Name + Spinner) theriyum:
  if (showSplash) {
    return (
      <>
        <SplashScreenView />
        <StatusBar style="light" />
      </>
    );
  }

  // 2.5 seconds kalithu TodoScreen varum:
  return (
    <>
      <TodoScreen />
      <StatusBar style="dark" />
      <ProfileCard />
    </>
  );
}

// TOPIC 2: Core Components & Mobile Flexbox (TASK-007)
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';

function ProfileCard() {
  return (
    // Line 3: Outer container - idhula flex: 1 pota screen muzhuka occupy pannum
    <View style={styles.cardContainer}>
      <Text style={styles.actionBtn1}>Welcome to My Profile Card!</Text>
      {/* Line 4: Row layout for Avatar + User Info side-by-side */}
      <View style={styles.headerRow}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
          contentFit="cover"
          transition={500}
        />
        <View style={styles.infoCol}>
          <Text style={styles.userName}>Bharath M</Text>
          <Text style={styles.userRole}>Python Developer</Text>
          <Text style={styles.userRole}>React Native Developer</Text>

        </View>

      </View>


      {/* Line 5: Interactive Follow Button */}
      <Pressable
        android_ripple={{ color: '#1d4ed8' }}
        style={({ pressed }) => [
          styles.actionBtn,
          pressed && styles.actionBtnPressed
        ]}
        onPress={() => alert('Following!')}
      >
        <Text style={styles.btnText}>Follow</Text>
      </Pressable>

    </View>
  );
}

// Line 6: Mobile styles definition
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    // width: '50%',
    // height: 200,
    margin: 16,
    // Mobile shadow (Elevation for Android, shadow props for iOS)
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  headerRow: {
    flexDirection: 'row', // Horizontal alignment (Avatar left, Details right)
    alignItems: 'center', // Vertical center in row
    gap: 12,              // Space between avatar and text
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circle aaga matha half of width/height
  },
  infoCol: {
    flex: 1, // Remaining horizontal space muzhuka eduthukum
    flexDirection: 'column',
  },
    infoCol1: {
    // flex: 1, // Remaining horizontal space muzhuka eduthukum
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  userRole: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  actionBtn: {
    marginTop: 126,
    marginBottom: 80,
    backgroundColor: '#25ebd1',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center', // Text-ai horizontal center seiyum
  },
  actionBtnPressed: {
    opacity: 0.8,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
    actionBtn1: {
    marginTop: 126,
    marginBottom: 80,
    textAlign: 'center',
    color: '#634747',
    fontSize: 17,
    fontWeight: '900',
    backgroundColor: '#3ceb25',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center', // Text-ai horizontal center seiyum
  },
});



// 3.2 src/config/appConfig.ts
// import { View, Text } from 'react-native';
// // import { env } from '@/config/env';
// import { appConfig } from '@/config/appConfig';

// export default function App() {
//   return (
//     <View style={{ flex: 1, padding: 24, paddingTop: 80, gap: 8 }}>
//       <Text style={{ fontSize: 20, fontWeight: '700' }}>Config Test</Text>
//       <Text>App: {appConfig.appName} v{appConfig.version}</Text>
//       <Text>Env: {env.appEnv}</Text>
//       <Text>API: {env.apiUrl}</Text>
//       <Text>Timeout: {appConfig.requestTimeoutMs} ms</Text>
//       <Text>Analytics: {String(appConfig.features.enableAnalytics)}</Text>
//       <Text>Debug banner: {String(appConfig.features.showDebugBanner)}</Text>
//     </View>
//   );
// }

// File 2: src/components/common/Button.tsx

// Idhu Part 3.1 (ButtonProps) oda real use.


// // import { View } from 'react-native';
// import Button from './src/components/common/Button';


// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
//       <Button title="Add Todo" onPress={() => console.log('added')} />
//       <Button title="Cancel" variant="secondary" onPress={() => {}} />
//       <Button title="Delete" variant="danger" onPress={() => {}} />
//       <Button title="Disabled" disabled onPress={() => {}} />
//     </View>
//   );
// }



// Oru todo-va screen la kaattura component. Idhu 
// Props typing, destructuring, enum, optional chaining (?.), nullish (??) ellathaiyum use pannum.

// import { useState } from 'react';
// import { View } from 'react-native';
// import TodoItem from '@/components/common/TodoItem';
// import { Todo, Priority } from '@/models/todo.model';

// const SAMPLE: Todo[] = [
//   {
//     id: '1',
//     title: 'Learn TypeScript',
//     done: false,
//     priority: Priority.High,
//     dueDate: '2026-11-25',
//     note: 'Interfaces and enums',
//     category: { id: 'c1', name: 'Study' },
//   },
//   { id: '2', title: 'Buy milk', done: true, priority: Priority.Low, dueDate: null },
//   { id: '3', title: 'Call Ravi', done: false, priority: Priority.Medium, dueDate: null },
// ];

// export default function App() {
//   const [todos, setTodos] = useState<Todo[]>(SAMPLE);

//   const toggle = (id: string) =>
//     setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));

//   const remove = (id: string) =>
//     setTodos(prev => prev.filter(t => t.id !== id));

//   return (
//     <View style={{ flex: 1, paddingTop: 70, paddingHorizontal: 16, backgroundColor: '#f1f5f9' }}>
//       {todos.map(t => (
//         <TodoItem key={t.id} todo={t} onToggle={toggle} onDelete={remove} />
//       ))}
//     </View>
//   );
// }



// File 4: src/components/common/FilterBar.tsx

// All / Active / Done nu 3 buttons kaattura bar.
//  Idhu union type (Filter), props typing, map, as const use pannum.

// import { useState } from 'react';
// import { View } from 'react-native';
// import TodoItem from '@/components/common/TodoItem';
// import FilterBar from '@/components/common/FilterBar';
// import { Todo, Priority, Filter } from '@/models/todo.model';

// const SAMPLE: Todo[] = [
//   {
//     id: '1',
//     title: 'Learn TypeScript',
//     done: false,
//     priority: Priority.High,
//     dueDate: '2026-11-25',
//     note: 'Interfaces and enums',
//     category: { id: 'c1', name: 'Study' },
//   },
//   { id: '2', title: 'Buy milk', done: true, priority: Priority.Low, dueDate: null },
//   { id: '3', title: 'Call Ravi', done: false, priority: Priority.Medium, dueDate: null },
// ];

// export default function App() {
//   const [todos, setTodos] = useState<Todo[]>(SAMPLE);
//   const [filter, setFilter] = useState<Filter>('all');

//   const toggle = (id: string) =>
//     setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));

//   const remove = (id: string) =>
//     setTodos(prev => prev.filter(t => t.id !== id));

//   const visibleTodos = todos.filter(t => {
//     if (filter === 'active') return !t.done;
//     if (filter === 'done') return t.done;
//     return true;
//   });

//   return (
//     <View style={{ flex: 1, paddingTop: 70, paddingHorizontal: 16, backgroundColor: '#f1f5f9' }}>
//       <FilterBar current={filter} onChange={setFilter} />
//       {visibleTodos.map(t => (
//         <TodoItem key={t.id} todo={t} onToggle={toggle} onDelete={remove} />
//       ))}
//     </View>
//   );
// }



// File 5: src/services/storageService.ts

// Phone la data save panni vechukka (app close pannina aprom kooda irukkum).
//  Idhu async / await, Promise, try / catch, generics (<T>) use pannum.

// import { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import Button from '@/components/common/Button';
// import { storageService } from '@/services/storageService';
// import { STORAGE_KEYS } from '@/constants/storageKeys';
// import { Todo, Priority } from '@/models/todo.model';

// export default function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   // App open aagumbodhu saved data load pannum
//   useEffect(() => {
//     const init = async () => {
//       const saved = await storageService.get<Todo[]>(STORAGE_KEYS.TODOS);
//       setTodos(saved ?? []);
//     };
//     init();
//   }, []);

//   const handleSave = async () => {
//     const sample: Todo[] = [
//       { id: '1', title: 'Learn TypeScript', done: false, priority: Priority.High, dueDate: null },
//       { id: '2', title: 'Buy milk', done: true, priority: Priority.Low, dueDate: null },
//     ];
//     await storageService.set(STORAGE_KEYS.TODOS, sample);
//     setTodos(sample);
//   };

//   const handleClear = async () => {
//     await storageService.remove(STORAGE_KEYS.TODOS);
//     setTodos([]);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
//       <Text style={{ fontSize: 18 }}>Saved todos: {todos.length}</Text>
//       {todos.map(t => (
//         <Text key={t.id}>• {t.title}</Text>
//       ))}
//       <Button title="Save sample" onPress={handleSave} />
//       <Button title="Clear" variant="danger" onPress={handleClear} />
//     </View>
//   );
// }





// File 6: src/hooks/useTodos.ts

// Ippo varaikkum logic (add, toggle, delete, save, load) App.tsx la ezhudhitu irundhom. 
// Idhai ellaam oru custom hook kulla serkkurom. Idhu Part 3.4 (custom hook return types) oda real use.


// import { useState } from 'react';
// import { View, Text, TextInput } from 'react-native';
// import Button from '@/components/common/Button';
// import TodoItem from '@/components/common/TodoItem';
// import useTodos from '@/hooks/useTodos';

// export default function App() {
//   const { todos, loading, doneCount, addTodo, toggleTodo, deleteTodo } = useTodos();
//   const [text, setText] = useState('');

//   const handleAdd = () => {
//     addTodo(text);
//     setText('');
//   };

//   if (loading) {
//     return <Text style={{ marginTop: 100, textAlign: 'center' }}>Loading...</Text>;
//   }

//   return (
//     <View style={{ flex: 1, paddingTop: 70, paddingHorizontal: 16, backgroundColor: '#f1f5f9' }}>
//       <Text style={{ fontSize: 16, marginBottom: 8 }}>
//         {doneCount} / {todos.length} done
//       </Text>

//       <TextInput
//         value={text}
//         onChangeText={setText}
//         placeholder="You can add a new todo..."
//         style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 8 }}
//       />
//       <Button title="Add" onPress={handleAdd} />

//       <View style={{ marginTop: 16 }}>
//         {todos.map(t => (
//           <TodoItem key={t.id} todo={t} onToggle={toggleTodo} onDelete={deleteTodo} />
//         ))}
//       </View>
//     </View>
//   );
// }


