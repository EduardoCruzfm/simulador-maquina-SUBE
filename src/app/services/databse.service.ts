import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  query,
  where,
  getDocs,
  addDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: Firestore) {}

  async addUSer(user: any, coleccion: string) {
    try {
      const userRef = doc(this.firestore, `${coleccion}/${user.id}`);
      await setDoc(userRef, { ...user });

      console.log('Usuario agregado exitosamente con ID:', user.id);
    } catch (error) {
      console.error('Error al agregar el usuario:', error);
    }
  }

  async addLog(log: any, coleccion: string) {
    try {
      const col = collection(this.firestore, coleccion);
      const docRef = await addDoc(col, log);
      console.log('Log agregado exitosamente con ID:', docRef.id);
    } catch (error) {
      console.error('Error al agregar el log:', error);
    }
  }

  async addSurvey(survey: any, coleccion: string) {
    try {
      const col = collection(this.firestore, coleccion);
      const docRef = await addDoc(col, survey);

      // 🔐 Guardamos el ID dentro del documento
      await setDoc(doc(this.firestore, coleccion, docRef.id), {
        ...survey,
        id: docRef.id
      });

      console.log('Encuesta agregada exitosamente con ID:', docRef.id);
    } catch (error) {
      console.error('Error al agregar el encuesta:', error);
    }
  }

  getColeccion(nombreColeccion: string) {
    const col = collection(this.firestore, nombreColeccion);
    return collectionData(col, { idField: 'id' });
  }

  async updateUser(usuario: any, coleccion: string) {
    try {
      const docRef = doc(this.firestore, `${coleccion}/${usuario.id}`);
      await updateDoc(docRef, { ...usuario });
    } catch (error) {
      console.error('Error al modificar usuario:', error);
    }
  }

  async delete(usuario: any, coleccion: string) {
    try {
      const docRef = doc(this.firestore, `${coleccion}/${usuario.id}`);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  }

  async getUserById(uid: string, coleccion: string): Promise<any> {
    try {
      const col = collection(this.firestore, coleccion);
      const q = query(col, where('id', '==', uid));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        const data = docSnap.data();
        console.log('Usuario encontrado:', data['nombre']);
        return data;
      } else {
        console.log('No se encontró el usuario con el UID proporcionado.');
        return null;
      }
    } catch (error) {
      console.error('Error obteniendo el usuario:', error);
      return null;
    }
  }
 
}
